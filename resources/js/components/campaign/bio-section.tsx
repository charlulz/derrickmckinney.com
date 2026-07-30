import { PhotoPlaceholder } from '@/components/campaign/photo-placeholder';
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
            className="campaign-section"
        >
            <div className="campaign-container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <PhotoPlaceholder
                    aspect="portrait"
                    label={content.bioPhotoLabel}
                    className="mx-auto w-full max-w-md lg:mx-0"
                />
                <div className="space-y-6">
                    <SectionHeading kicker="About" title={content.bioTitle} />
                    {content.bioBody.map((paragraph) => (
                        <p
                            key={paragraph}
                            className="text-lg leading-relaxed text-charcoal-muted"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
