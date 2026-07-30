<?php

use Inertia\Testing\AssertableInertia as Assert;

test('the campaign home page renders', function () {
    $response = $this->get(route('home'));

    $response->assertOk();

    $response->assertInertia(fn (Assert $page) => $page
        ->component('home')
        ->where('focus', null)
        ->has('endorsements', 0)
    );
});

test('the campaign landing page opts out of the authenticated app layout', function () {
    $component = 'home';

    $this->get(route('home'))->assertInertia(fn (Assert $page) => $page->component($component));

    expect(file_get_contents(resource_path('js/app.tsx')))
        ->toMatch("/case name === '{$component}':\s+return null;/");
});

test('every hero image variant referenced by the srcset exists', function (string $variant) {
    expect(public_path("images/{$variant}"))->toBeReadableFile();
})->with([
    'derrick-hero-800.webp',
    'derrick-hero-1200.webp',
    'derrick-hero-1600.webp',
    'derrick-hero-800.jpg',
    'derrick-hero-1200.jpg',
    'derrick-hero-1600.jpg',
]);

test('every biography image variant referenced by the srcset exists', function (string $variant) {
    expect(public_path("images/{$variant}"))->toBeReadableFile();
})->with([
    'derrick-bio-640.webp',
    'derrick-bio-960.webp',
    'derrick-bio-640.jpg',
    'derrick-bio-960.jpg',
]);

test('the campaign hero does not display placeholder copy', function () {
    $campaignContent = file_get_contents(resource_path('js/content/campaign.ts'));

    expect($campaignContent)
        ->toContain("heroMessage: 'Together, we can build a stronger Grayson.'")
        ->not->toMatch("/heroMessage:\\s*'\\[PLACEHOLDER\\]/")
        ->not->toMatch("/heroSupporting:\\s*'\\[PLACEHOLDER\\]/");
});

test('the why section has approved-shape campaign content', function () {
    $campaignContent = file_get_contents(resource_path('js/content/campaign.ts'));

    expect($campaignContent)
        ->toContain("whyTitle: 'Why I’m Running'")
        ->toContain('whyStatement:')
        ->toContain('whyPoints: [')
        ->not->toMatch("/whyBody:\\s*'\\[PLACEHOLDER\\]/");
});

test('the campaign priorities do not display placeholder copy', function () {
    $campaignContent = file_get_contents(resource_path('js/content/campaign.ts'));

    expect($campaignContent)
        ->toContain("title: 'Reliable City Services'")
        ->toContain("title: 'Small Business & Opportunity'")
        ->toContain("title: 'A Safe, Connected Future'")
        ->not->toMatch("/issuesIntro:\\s*'\\[PLACEHOLDER\\]/")
        ->not->toMatch("/title:\\s*'\\[PLACEHOLDER\\]/")
        ->not->toMatch("/summary:\\s*'\\[PLACEHOLDER\\]/");
});

test('the campaign biography does not display placeholder copy', function () {
    $campaignContent = file_get_contents(resource_path('js/content/campaign.ts'));

    expect($campaignContent)
        ->toContain("bioTitle: 'Meet Derrick'")
        ->toContain("bioValues: ['Present', 'Practical', 'People-first']")
        ->not->toMatch("/bioBody:\\s*\\[\\s*'\\[PLACEHOLDER\\]/")
        ->not->toContain('Photo placeholder:');
});

test('the completed campaign page has no visible content placeholders', function () {
    $campaignContent = file_get_contents(resource_path('js/content/campaign.ts'));

    expect($campaignContent)
        ->not->toContain('[PLACEHOLDER]')
        ->not->toContain('#facebook-placeholder')
        ->not->toContain('#instagram-placeholder')
        ->toContain("finalCtaTitle: 'Let’s move Grayson forward—together.'")
        ->toContain('signupBenefits: [');
});

test('the footer links to the public website source', function () {
    $footer = file_get_contents(resource_path('js/components/campaign/footer.tsx'));

    expect($footer)
        ->toContain('https://github.com/charlulz/derrickmckinney.com')
        ->toContain('View this website’s public source');
});

test('the campaign home page accepts a verified focus query', function () {
    $response = $this->get(route('home', ['focus' => 'economy']));

    $response->assertOk();

    $response->assertInertia(fn (Assert $page) => $page
        ->component('home')
        ->where('focus', 'economy')
    );
});

test('the campaign home page ignores an unknown focus query', function () {
    $response = $this->get(route('home', ['focus' => 'invented-issue']));

    $response->assertOk();

    $response->assertInertia(fn (Assert $page) => $page
        ->component('home')
        ->where('focus', null)
    );
});
