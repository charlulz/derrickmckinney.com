import { IssueCard } from '@/components/campaign/issue-card';
import type { CampaignContent } from '@/content/campaign';

type PrioritiesSectionProps = {
    content: CampaignContent;
    focus?: string | null;
};

export function PrioritiesSection({
    content,
    focus = null,
}: PrioritiesSectionProps) {
    return (
        <section
            id="priorities"
            aria-labelledby="priorities-heading"
            className="campaign-section relative overflow-hidden border-y border-navy/10 bg-navy-deep text-cream"
        >
            <div
                aria-hidden
                className="absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                    backgroundSize: '3rem 3rem',
                }}
            />

            <div className="campaign-container relative space-y-12">
                <div className="grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end lg:gap-16">
                    <div>
                        <p className="text-sm font-bold tracking-[0.12em] text-gold-muted uppercase">
                            Priorities
                        </p>
                        <h2
                            id="priorities-heading"
                            className="campaign-display mt-3 text-4xl text-balance text-cream sm:text-5xl"
                        >
                            {content.issuesTitle}
                        </h2>
                    </div>
                    <p className="max-w-2xl text-lg leading-relaxed text-cream/70 lg:pb-1">
                        {content.issuesIntro}
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    {content.issues.map((issue, index) => (
                        <IssueCard
                            key={issue.id}
                            issue={issue}
                            index={index}
                            highlighted={focus === issue.id}
                        />
                    ))}
                </div>

                <p className="border-t border-cream/10 pt-6 text-sm leading-relaxed text-cream/55">
                    This agenda will continue to grow through conversations with
                    residents across Grayson.
                </p>
            </div>
        </section>
    );
}
