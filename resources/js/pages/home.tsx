import { Head } from '@inertiajs/react';
import { useEffect } from 'react';
import { BioSection } from '@/components/campaign/bio-section';
import { CampaignButton } from '@/components/campaign/button';
import { EndorsementsSection } from '@/components/campaign/endorsements-section';
import { CampaignFooter } from '@/components/campaign/footer';
import { CampaignHeader } from '@/components/campaign/header';
import { CampaignHero } from '@/components/campaign/hero';
import { PrioritiesSection } from '@/components/campaign/priorities-section';
import { SectionHeading } from '@/components/campaign/section-heading';
import { SignupForm } from '@/components/campaign/signup-form';
import { WhySection } from '@/components/campaign/why-section';
import { campaignContent, campaignEndorsements } from '@/content/campaign';
import type { CampaignEndorsement } from '@/content/campaign';
import CampaignLayout from '@/layouts/campaign-layout';

type HomePageProps = {
    focus?: string | null;
    endorsements?: CampaignEndorsement[];
    signupStatus?: string | null;
};

function scrollToId(id: string) {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Home({
    focus = null,
    endorsements = campaignEndorsements,
    signupStatus = null,
}: HomePageProps) {
    const content = campaignContent;

    useEffect(() => {
        if (!focus) {
            return;
        }

        const timer = window.setTimeout(() => {
            scrollToId(`priority-${focus}`);
        }, 250);

        return () => window.clearTimeout(timer);
    }, [focus]);

    return (
        <CampaignLayout>
            <Head title={`${content.candidateName} ${content.office}`}>
                <meta
                    head-key="description"
                    name="description"
                    content={`${content.candidateName} for Mayor of Grayson, Kentucky. Local leadership for our community.`}
                />
            </Head>

            <CampaignHeader
                content={content}
                onPrimaryClick={() => scrollToId('signup')}
            />

            <main>
                <CampaignHero
                    content={content}
                    onPrimaryClick={() => scrollToId('signup')}
                    onSecondaryClick={() => scrollToId('priorities')}
                />

                <WhySection content={content} />

                <PrioritiesSection content={content} focus={focus} />

                <BioSection content={content} />

                <EndorsementsSection endorsements={endorsements} />

                <section
                    id="signup"
                    aria-labelledby="signup-heading"
                    className="campaign-section border-t border-navy/10 bg-navy text-cream"
                >
                    <div className="campaign-container grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14">
                        <SectionHeading
                            title={content.signupTitle}
                            description={content.signupIntro}
                            className="[&_h2]:text-cream [&_p]:text-cream/75"
                        />
                        <div className="rounded-[var(--campaign-radius)] border border-cream/15 bg-cream p-6 text-charcoal shadow-[0_12px_40px_rgba(0,0,0,0.18)] sm:p-8">
                            <SignupForm
                                content={content}
                                status={signupStatus}
                            />
                        </div>
                    </div>
                </section>

                <section
                    id="final-cta"
                    aria-labelledby="final-cta-heading"
                    className="campaign-section"
                >
                    <div className="campaign-container max-w-3xl space-y-6 text-center">
                        <h2
                            id="final-cta-heading"
                            className="campaign-display text-3xl text-balance sm:text-4xl"
                        >
                            {content.finalCtaTitle}
                        </h2>
                        <p className="text-lg leading-relaxed text-charcoal-muted">
                            {content.finalCtaBody}
                        </p>
                        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <CampaignButton
                                type="button"
                                size="lg"
                                onClick={() => scrollToId('signup')}
                            >
                                {content.primaryCta}
                            </CampaignButton>
                            <CampaignButton
                                type="button"
                                variant="secondary"
                                size="lg"
                                onClick={() => scrollToId('priorities')}
                            >
                                {content.secondaryCta}
                            </CampaignButton>
                        </div>
                    </div>
                </section>
            </main>

            <CampaignFooter content={content} />
        </CampaignLayout>
    );
}
