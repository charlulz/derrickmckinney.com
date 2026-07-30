import { ArrowRight } from 'lucide-react';
import { CampaignButton } from '@/components/campaign/button';
import type { CampaignContent } from '@/content/campaign';

type FinalCtaSectionProps = {
    content: CampaignContent;
    onPrimaryClick: () => void;
    onSecondaryClick: () => void;
};

export function FinalCtaSection({
    content,
    onPrimaryClick,
    onSecondaryClick,
}: FinalCtaSectionProps) {
    return (
        <section
            id="final-cta"
            aria-labelledby="final-cta-heading"
            className="campaign-section relative overflow-hidden"
        >
            <div
                aria-hidden
                className="absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-gold/50 to-transparent"
            />

            <div className="campaign-container">
                <div className="relative overflow-hidden rounded-[calc(var(--campaign-radius)*2)] border border-navy/10 bg-cream-warm px-6 py-12 text-center shadow-[0_18px_60px_rgba(18,28,51,0.08)] sm:px-10 sm:py-16">
                    <div
                        aria-hidden
                        className="absolute -top-20 -right-20 size-56 rounded-full border-[2.5rem] border-gold/10"
                    />
                    <div
                        aria-hidden
                        className="absolute -bottom-24 -left-20 size-64 rounded-full border-[3rem] border-kentucky/10"
                    />

                    <div className="relative mx-auto max-w-3xl">
                        <p className="campaign-kicker">
                            There’s a place for you
                        </p>
                        <h2
                            id="final-cta-heading"
                            className="campaign-display mt-3 text-4xl text-balance sm:text-5xl"
                        >
                            {content.finalCtaTitle}
                        </h2>
                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-muted">
                            {content.finalCtaBody}
                        </p>
                        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <CampaignButton
                                type="button"
                                size="lg"
                                onClick={onPrimaryClick}
                            >
                                {content.primaryCta}
                                <ArrowRight aria-hidden className="size-4" />
                            </CampaignButton>
                            <CampaignButton
                                type="button"
                                variant="secondary"
                                size="lg"
                                onClick={onSecondaryClick}
                            >
                                {content.secondaryCta}
                            </CampaignButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
