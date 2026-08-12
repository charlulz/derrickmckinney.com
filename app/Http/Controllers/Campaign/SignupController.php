<?php

namespace App\Http\Controllers\Campaign;

use App\Actions\Campaign\SubmitSignupToGoHighLevel;
use App\Http\Controllers\Controller;
use App\Http\Requests\Campaign\StoreSignupRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;
use RuntimeException;
use Throwable;

class SignupController extends Controller
{
    /**
     * Accept a campaign email and mobile signup and sync it to GoHighLevel.
     */
    public function store(
        StoreSignupRequest $request,
        SubmitSignupToGoHighLevel $submitSignup,
    ): RedirectResponse {
        $validated = $request->validated();

        try {
            $submitSignup->handle($validated);
        } catch (RuntimeException $exception) {
            Log::error('Campaign signup failed to sync to GoHighLevel.', [
                'email' => $validated['email'],
                'message' => $exception->getMessage(),
            ]);

            return back()
                ->withInput()
                ->withErrors([
                    'email' => 'We could not save your information right now. Please try again in a moment.',
                ]);
        } catch (Throwable $exception) {
            report($exception);

            return back()
                ->withInput()
                ->withErrors([
                    'email' => 'We could not save your information right now. Please try again in a moment.',
                ]);
        }

        return back()->with('signup', 'success');
    }
}
