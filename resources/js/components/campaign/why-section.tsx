import { ArrowDownRight } from 'lucide-react';
import type { CampaignContent } from '@/content/campaign';

type WhySectionProps = {
    content: CampaignContent;
};

export function WhySection({ content }: WhySectionProps) {
    return (
        <section
            id="why"
            aria-labelledby="why-heading"
            className="campaign-section relative overflow-hidden"
        >
            <div
                aria-hidden
                className="absolute top-0 right-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full border-[3rem] border-gold/10"
            />

            <div className="campaign-container relative grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-20">
                <div className="lg:sticky lg:top-28">
                    <p className="campaign-kicker">The work ahead</p>
                    <h2
                        id="why-heading"
                        className="campaign-display mt-3 max-w-lg text-4xl text-balance sm:text-5xl"
                    >
                        {content.whyTitle}
                    </h2>
                    <div className="mt-7 h-1 w-20 rounded-full bg-gold" />
                </div>

                <div className="space-y-9">
                    <div className="border-l-2 border-gold pl-6 sm:pl-8">
                        <p className="campaign-display text-2xl leading-snug text-pretty text-navy sm:text-3xl">
                            {content.whyStatement}
                        </p>
                        <p className="mt-4 text-sm font-bold tracking-[0.08em] text-kentucky uppercase">
                            Our commitment to Grayson
                        </p>
                    </div>

                    <p className="max-w-2xl text-lg leading-relaxed text-charcoal-muted">
                        {content.whyBody}
                    </p>

                    <div className="grid gap-px overflow-hidden rounded-[var(--campaign-radius)] border border-navy/10 bg-navy/10 sm:grid-cols-3">
                        {content.whyPoints.map((point, index) => (
                            <article
                                key={point.title}
                                className="group bg-cream-warm p-5 transition-colors hover:bg-cream sm:p-6"
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-xs font-bold tracking-[0.12em] text-gold uppercase">
                                        0{index + 1}
                                    </span>
                                    <ArrowDownRight
                                        aria-hidden
                                        className="size-4 text-kentucky transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                                    />
                                </div>
                                <h3 className="campaign-display mt-8 text-xl text-navy">
                                    {point.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-charcoal-muted">
                                    {point.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
