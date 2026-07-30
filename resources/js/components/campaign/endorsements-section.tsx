import { PullQuote } from '@/components/campaign/pull-quote';
import { SectionHeading } from '@/components/campaign/section-heading';
import type { CampaignEndorsement } from '@/content/campaign';

type EndorsementsSectionProps = {
    endorsements: CampaignEndorsement[];
};

/**
 * Trust-building endorsements/testimonials.
 * Renders nothing until verified content is provided.
 */
export function EndorsementsSection({
    endorsements,
}: EndorsementsSectionProps) {
    if (endorsements.length === 0) {
        return null;
    }

    return (
        <section
            id="support"
            aria-labelledby="support-heading"
            className="campaign-section border-t border-navy/10 bg-cream-warm/40"
        >
            <div className="campaign-container space-y-10">
                <SectionHeading
                    kicker="Community support"
                    title="Neighbors speaking up"
                    description="Verified local endorsements and testimonials appear here only after confirmation."
                />
                <div className="grid gap-6 lg:grid-cols-2">
                    {endorsements.map((item) => (
                        <PullQuote
                            key={`${item.name}-${item.role}`}
                            quote={item.quote}
                            attribution={item.name}
                            role={item.role}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
