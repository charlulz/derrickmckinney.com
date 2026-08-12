<?php

use Illuminate\Support\Facades\Http;

test('campaign signup syncs the contact to GoHighLevel', function () {
    config([
        'services.gohighlevel.api_key' => 'pit-test-token',
        'services.gohighlevel.location_id' => 'loc_test_123',
        'services.gohighlevel.base_url' => 'https://services.leadconnectorhq.com',
        'services.gohighlevel.version' => '2021-07-28',
    ]);

    Http::fake([
        'services.leadconnectorhq.com/contacts/upsert' => Http::response([
            'contact' => [
                'id' => 'contact_123',
                'email' => 'jordan@example.com',
            ],
        ], 200),
    ]);

    $response = $this->from(route('home'))->post(route('campaign.signup'), [
        'name' => 'Jordan Neighbor',
        'email' => 'jordan@example.com',
        'phone' => '606-555-0100',
    ]);

    $response->assertRedirect(route('home'));
    $response->assertSessionHas('signup', 'success');

    Http::assertSent(function ($request) {
        return $request->url() === 'https://services.leadconnectorhq.com/contacts/upsert'
            && $request->hasHeader('Authorization', 'Bearer pit-test-token')
            && $request->hasHeader('Version', '2021-07-28')
            && $request['locationId'] === 'loc_test_123'
            && $request['firstName'] === 'Jordan'
            && $request['lastName'] === 'Neighbor'
            && $request['email'] === 'jordan@example.com'
            && $request['phone'] === '606-555-0100'
            && $request['source'] === 'derrickmckinney.com'
            && $request['tags'] === ['website-signup', 'campaign'];
    });
});

test('campaign signup shows an error when GoHighLevel sync fails', function () {
    config([
        'services.gohighlevel.api_key' => 'pit-test-token',
        'services.gohighlevel.location_id' => 'loc_test_123',
    ]);

    Http::fake([
        'services.leadconnectorhq.com/contacts/upsert' => Http::response([
            'message' => 'Forbidden',
        ], 403),
    ]);

    $response = $this->from(route('home'))->post(route('campaign.signup'), [
        'name' => 'Jordan Neighbor',
        'email' => 'jordan@example.com',
        'phone' => '606-555-0100',
    ]);

    $response->assertRedirect(route('home'));
    $response->assertSessionHasErrors('email');
    $response->assertSessionMissing('signup');
});

test('campaign signup requires essential fields', function () {
    $response = $this->from(route('home'))->post(route('campaign.signup'), [
        'name' => '',
        'email' => 'not-an-email',
        'phone' => '',
    ]);

    $response->assertRedirect(route('home'));
    $response->assertSessionHasErrors(['name', 'email', 'phone']);
});
