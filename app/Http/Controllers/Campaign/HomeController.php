<?php

namespace App\Http\Controllers\Campaign;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * Display the campaign landing page.
     */
    public function __invoke(Request $request): Response
    {
        $focus = $request->string('focus')->toString();

        $allowedFocus = ['community', 'economy', 'future'];

        return Inertia::render('home', [
            'focus' => in_array($focus, $allowedFocus, true) ? $focus : null,
            'endorsements' => [],
            'signupStatus' => $request->session()->get('signup'),
            'social' => [
                'title' => 'Derrick McKinney for Mayor of Grayson',
                'description' => 'Together, we can build a stronger Grayson. Join Derrick McKinney’s campaign for practical, people-first leadership.',
                'url' => route('home'),
                'image' => url('/images/derrick-mckinney-social-share.jpg'),
                'imageAlt' => 'Derrick McKinney and his wife in front of the Carter County Courthouse with campaign text',
            ],
        ]);
    }
}
