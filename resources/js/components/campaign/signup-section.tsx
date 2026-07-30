import { Check, Mail, MessageSquareText, Users } from 'lucide-react';
import { SignupForm } from '@/components/campaign/signup-form';
import type { CampaignContent } from '@/content/campaign';

type SignupSectionProps = {
    content: CampaignContent;
    status?: string | null;
};

const benefitIcons = [Mail, Users, MessageSquareText];

export function SignupSection({ content, status = null }: SignupSectionProps) {
    return (
        <section
            id="signup"
            aria-labelledby="signup-heading"
            className="campaign-section relative overflow-hidden bg-kentucky text-cream"
        >
            <div
                aria-hidden
                className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-navy-deep/35 to-transparent"
            />
            <div
                aria-hidden
                className="absolute -bottom-40 -left-40 size-96 rounded-full border-[5rem] border-cream/5"
            />

            <div className="campaign-container relative grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-20">
                <div>
                    <p className="text-sm font-bold tracking-[0.12em] text-gold-muted uppercase">
                        Get involved
                    </p>
                    <h2
                        id="signup-heading"
                        className="campaign-display mt-3 max-w-xl text-4xl text-balance text-cream sm:text-5xl"
                    >
                        {content.signupTitle}
                    </h2>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
                        {content.signupIntro}
                    </p>

                    <ul className="mt-9 grid gap-4">
                        {content.signupBenefits.map((benefit, index) => {
                            const Icon = benefitIcons[index] ?? Check;

                            return (
                                <li
                                    key={benefit}
                                    className="flex items-center gap-4 text-cream/90"
                                >
                                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gold-muted/35 bg-navy-deep/20 text-gold-muted">
                                        <Icon aria-hidden className="size-4" />
                                    </span>
                                    <span className="font-semibold">
                                        {benefit}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="rounded-[var(--campaign-radius)] border border-cream/20 bg-cream p-6 text-charcoal shadow-[0_24px_80px_rgba(18,28,51,0.28)] sm:p-9">
                    <div className="mb-7">
                        <p className="campaign-display text-2xl text-navy">
                            Join the campaign
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">
                            Add your name and receive updates from Team
                            McKinney.
                        </p>
                    </div>
                    <SignupForm content={content} status={status} />
                </div>
            </div>
        </section>
    );
}
