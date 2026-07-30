import { CampaignButton } from '@/components/campaign/button';
import type { CampaignContent } from '@/content/campaign';

type CampaignHeroProps = {
    content: CampaignContent;
    onPrimaryClick: () => void;
    onSecondaryClick: () => void;
};

const WEBP_SRCSET = [
    '/images/derrick-hero-800.webp 800w',
    '/images/derrick-hero-1200.webp 1200w',
    '/images/derrick-hero-1600.webp 1600w',
].join(', ');

const JPEG_SRCSET = [
    '/images/derrick-hero-800.jpg 800w',
    '/images/derrick-hero-1200.jpg 1200w',
    '/images/derrick-hero-1600.jpg 1600w',
].join(', ');

export function CampaignHero({
    content,
    onPrimaryClick,
    onSecondaryClick,
}: CampaignHeroProps) {
    return (
        <section
            aria-labelledby="hero-heading"
            className="relative isolate overflow-hidden bg-navy-deep text-cream"
        >
            <div className="relative lg:absolute lg:inset-0">
                <picture>
                    <source
                        type="image/webp"
                        srcSet={WEBP_SRCSET}
                        sizes="100vw"
                    />
                    <img
                        src="/images/derrick-hero-1600.jpg"
                        srcSet={JPEG_SRCSET}
                        sizes="100vw"
                        width={1672}
                        height={941}
                        alt={content.heroPhotoAlt}
                        fetchPriority="high"
                        decoding="async"
                        className="aspect-[5/4] w-full object-cover object-[68%_center] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:object-[62%_center]"
                    />
                </picture>

                <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/15 to-transparent lg:bg-gradient-to-r lg:from-navy-deep lg:from-8% lg:via-navy-deep/90 lg:via-42% lg:to-transparent lg:to-72%"
                />
                <div
                    aria-hidden
                    className="absolute inset-0 hidden lg:block lg:bg-gradient-to-t lg:from-navy-deep/45 lg:via-transparent lg:to-navy-deep/10"
                />
            </div>

            <div className="campaign-container relative flex items-end px-5 pt-8 pb-14 sm:px-8 sm:pt-10 sm:pb-16 lg:min-h-[min(84vh,48rem)] lg:items-center lg:px-10 lg:py-24">
                <div className="max-w-2xl lg:max-w-[39rem]">
                    <p className="campaign-hero-enter mb-5 inline-flex items-center gap-2 rounded-full border border-gold-muted/45 bg-navy-deep/45 px-3 py-1.5 text-xs font-bold tracking-[0.14em] text-gold-muted uppercase backdrop-blur-sm">
                        <span
                            aria-hidden
                            className="size-1.5 rounded-full bg-gold"
                        />
                        {content.office} · {content.location}
                    </p>
                    <h1
                        id="hero-heading"
                        className="campaign-hero-enter campaign-display text-5xl leading-[0.98] text-balance text-cream sm:text-6xl lg:text-7xl"
                    >
                        {content.candidateName}
                    </h1>
                    <p className="campaign-hero-enter-delay mt-6 max-w-xl text-xl leading-snug font-semibold text-balance text-cream sm:text-2xl">
                        {content.heroMessage}
                    </p>
                    <p className="campaign-hero-enter-delay-2 mt-4 max-w-lg text-base leading-relaxed text-cream/75 sm:text-lg">
                        {content.heroSupporting}
                    </p>
                    <div className="campaign-hero-enter-delay-2 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <CampaignButton
                            type="button"
                            variant="gold"
                            size="lg"
                            onClick={onPrimaryClick}
                        >
                            {content.primaryCta}
                        </CampaignButton>
                        <CampaignButton
                            type="button"
                            variant="secondary"
                            size="lg"
                            onClick={onSecondaryClick}
                            className="border-cream/30 bg-transparent text-cream hover:border-cream/50 hover:bg-cream/10"
                        >
                            {content.secondaryCta}
                        </CampaignButton>
                    </div>
                    <p className="campaign-hero-enter-delay-2 mt-5 text-sm font-medium text-cream/60">
                        A campaign rooted in Grayson, Kentucky.
                    </p>
                </div>
            </div>
        </section>
    );
}
