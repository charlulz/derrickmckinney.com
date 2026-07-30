import { MapPin } from 'lucide-react';
import { CampaignButton } from '@/components/campaign/button';
import { SectionHeading } from '@/components/campaign/section-heading';
import type { CampaignContent } from '@/content/campaign';

type BioSectionProps = {
    content: CampaignContent;
};

export function BioSection({ content }: BioSectionProps) {
    return (
        <section
            id="meet"
            aria-labelledby="meet-heading"
            className="campaign-section overflow-hidden"
        >
            <div className="campaign-container grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-20">
                <figure className="relative mx-auto w-full max-w-lg lg:mx-0">
                    <div
                        aria-hidden
                        className="absolute -top-5 -left-5 h-32 w-32 border-t-2 border-l-2 border-gold sm:-top-7 sm:-left-7"
                    />
                    <div
                        aria-hidden
                        className="absolute -right-5 -bottom-5 h-32 w-32 border-r-2 border-b-2 border-kentucky/35 sm:-right-7 sm:-bottom-7"
                    />

                    <div className="relative overflow-hidden rounded-[var(--campaign-radius)] bg-navy-deep shadow-[0_24px_64px_rgba(18,28,51,0.18)]">
                        <picture>
                            <source
                                type="image/webp"
                                srcSet="/images/derrick-bio-640.webp 640w, /images/derrick-bio-960.webp 960w"
                                sizes="(min-width: 1024px) 42vw, 90vw"
                            />
                            <img
                                src="/images/derrick-bio-960.jpg"
                                srcSet="/images/derrick-bio-640.jpg 640w, /images/derrick-bio-960.jpg 960w"
                                sizes="(min-width: 1024px) 42vw, 90vw"
                                width={960}
                                height={1707}
                                alt={content.bioPhotoAlt}
                                loading="lazy"
                                decoding="async"
                                className="aspect-[4/5] w-full object-cover object-[center_30%]"
                            />
                        </picture>

                        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-transparent px-6 pt-16 pb-5 text-cream">
                            <p className="font-bold">{content.candidateName}</p>
                            <p className="mt-1 text-sm text-cream/70">
                                Candidate for Mayor
                            </p>
                        </figcaption>
                    </div>
                </figure>

                <div>
                    <SectionHeading kicker="About" title={content.bioTitle} />

                    <div className="mt-8 space-y-5">
                        {content.bioBody.map((paragraph, index) => (
                            <p
                                key={paragraph}
                                className={
                                    index === 0
                                        ? 'campaign-display text-2xl leading-snug text-navy'
                                        : 'text-lg leading-relaxed text-charcoal-muted'
                                }
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {content.bioValues.map((value) => (
                            <span
                                key={value}
                                className="rounded-full border border-navy/10 bg-cream-warm px-3 py-1.5 text-sm font-bold text-navy"
                            >
                                {value}
                            </span>
                        ))}
                    </div>

                    <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                        <CampaignButton asChild size="default">
                            <a href="#signup">Join Derrick’s Campaign</a>
                        </CampaignButton>
                        <p className="flex items-center gap-2 text-sm font-semibold text-kentucky">
                            <MapPin aria-hidden className="size-4" />
                            {content.location}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
