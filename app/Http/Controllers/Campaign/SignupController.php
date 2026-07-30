<?php

namespace App\Http\Controllers\Campaign;

use App\Http\Controllers\Controller;
use App\Http\Requests\Campaign\StoreSignupRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;

class SignupController extends Controller
{
    /**
     * Accept a campaign email and mobile signup.
     *
     * Persistence / CRM sync can be added once campaign systems are connected.
     */
    public function store(StoreSignupRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        Log::info('Campaign signup received', [
            'email' => $validated['email'],
            'has_phone' => filled($validated['phone']),
        ]);

        return back()->with('signup', 'success');
    }
}
