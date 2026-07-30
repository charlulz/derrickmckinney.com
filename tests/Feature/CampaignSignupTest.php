<?php

test('campaign signup accepts valid contact details', function () {
    $response = $this->from(route('home'))->post(route('campaign.signup'), [
        'name' => 'Jordan Neighbor',
        'email' => 'jordan@example.com',
        'phone' => '606-555-0100',
    ]);

    $response->assertRedirect(route('home'));
    $response->assertSessionHas('signup', 'success');
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
