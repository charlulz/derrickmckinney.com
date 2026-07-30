import { Head } from '@inertiajs/react';
import { useEffect } from 'react';
import { BioSection } from '@/components/campaign/bio-section';
import { EndorsementsSection } from '@/components/campaign/endorsements-section';
import { FinalCtaSection } from '@/components/campaign/final-cta-section';
import { CampaignFooter } from '@/components/campaign/footer';
import { CampaignHeader } from '@/components/campaign/header';
import { CampaignHero } from '@/components/campaign/hero';
import { PrioritiesSection } from '@/components/campaign/priorities-section';
import { SignupSection } from '@/components/campaign/signup-section';
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

                <SignupSection content={content} status={signupStatus} />

                <FinalCtaSection
                    content={content}
                    onPrimaryClick={() => scrollToId('signup')}
                    onSecondaryClick={() => scrollToId('priorities')}
                />
            </main>

            <CampaignFooter content={content} />
        </CampaignLayout>
    );
}
