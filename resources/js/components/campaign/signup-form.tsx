import { Form } from '@inertiajs/react';
import { store } from '@/actions/App/Http/Controllers/Campaign/SignupController';
import { CampaignButton } from '@/components/campaign/button';
import type { CampaignContent } from '@/content/campaign';
import { cn } from '@/lib/utils';

type SignupFormProps = {
    content: CampaignContent;
    className?: string;
    status?: string | null;
};

export function SignupForm({ content, className, status }: SignupFormProps) {
    return (
        <Form
            {...store.form()}
            className={cn('space-y-5', className)}
            resetOnSuccess
        >
            {({ errors, processing, recentlySuccessful }) => (
                <>
                    {(recentlySuccessful || status === 'success') && (
                        <p
                            role="status"
                            className="rounded-[var(--campaign-radius)] border border-kentucky/25 bg-cream px-4 py-3 text-sm font-medium text-navy"
                        >
                            Thanks for joining. We’ll be in touch soon.
                        </p>
                    )}

                    <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2 sm:col-span-2">
                            <label
                                htmlFor="signup-name"
                                className="text-sm font-semibold text-navy"
                            >
                                Name
                            </label>
                            <input
                                id="signup-name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="campaign-focus-ring min-h-12 w-full rounded-[var(--campaign-radius)] border border-navy/15 bg-cream px-4 text-base text-charcoal placeholder:text-charcoal-muted/70"
                                placeholder="Your name"
                                aria-invalid={errors.name ? true : undefined}
                                aria-describedby={
                                    errors.name
                                        ? 'signup-name-error'
                                        : undefined
                                }
                            />
                            {errors.name ? (
                                <p
                                    id="signup-name-error"
                                    className="text-sm text-red-800"
                                >
                                    {errors.name}
                                </p>
                            ) : null}
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="signup-email"
                                className="text-sm font-semibold text-navy"
                            >
                                Email
                            </label>
                            <input
                                id="signup-email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="campaign-focus-ring min-h-12 w-full rounded-[var(--campaign-radius)] border border-navy/15 bg-cream px-4 text-base text-charcoal placeholder:text-charcoal-muted/70"
                                placeholder="you@example.com"
                                aria-invalid={errors.email ? true : undefined}
                                aria-describedby={
                                    errors.email
                                        ? 'signup-email-error'
                                        : undefined
                                }
                            />
                            {errors.email ? (
                                <p
                                    id="signup-email-error"
                                    className="text-sm text-red-800"
                                >
                                    {errors.email}
                                </p>
                            ) : null}
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="signup-phone"
                                className="text-sm font-semibold text-navy"
                            >
                                Mobile number
                            </label>
                            <input
                                id="signup-phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                required
                                className="campaign-focus-ring min-h-12 w-full rounded-[var(--campaign-radius)] border border-navy/15 bg-cream px-4 text-base text-charcoal placeholder:text-charcoal-muted/70"
                                placeholder="(000) 000-0000"
                                aria-invalid={errors.phone ? true : undefined}
                                aria-describedby={
                                    errors.phone
                                        ? 'signup-phone-error'
                                        : undefined
                                }
                            />
                            {errors.phone ? (
                                <p
                                    id="signup-phone-error"
                                    className="text-sm text-red-800"
                                >
                                    {errors.phone}
                                </p>
                            ) : null}
                        </div>
                    </div>

                    <p className="text-sm leading-relaxed text-charcoal-muted">
                        {content.signupPrivacy}
                    </p>

                    <CampaignButton
                        type="submit"
                        size="lg"
                        disabled={processing}
                        className="w-full sm:w-auto"
                    >
                        {processing ? 'Submitting…' : content.signupSubmit}
                    </CampaignButton>
                </>
            )}
        </Form>
    );
}
