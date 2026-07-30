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
    social: {
        title: string;
        description: string;
        url: string;
        image: string;
        imageAlt: string;
    };
};

function scrollToId(id: string) {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Home({
    focus = null,
    endorsements = campaignEndorsements,
    signupStatus = null,
    social,
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
            <Head title={social.title}>
                <meta
                    head-key="description"
                    name="description"
                    content={social.description}
                />
                <link head-key="canonical" rel="canonical" href={social.url} />

                <meta head-key="og:type" property="og:type" content="website" />
                <meta
                    head-key="og:url"
                    property="og:url"
                    content={social.url}
                />
                <meta
                    head-key="og:title"
                    property="og:title"
                    content={social.title}
                />
                <meta
                    head-key="og:description"
                    property="og:description"
                    content={social.description}
                />
                <meta
                    head-key="og:image"
                    property="og:image"
                    content={social.image}
                />
                <meta
                    head-key="og:image:secure_url"
                    property="og:image:secure_url"
                    content={social.image}
                />
                <meta
                    head-key="og:image:type"
                    property="og:image:type"
                    content="image/jpeg"
                />
                <meta
                    head-key="og:image:width"
                    property="og:image:width"
                    content="1200"
                />
                <meta
                    head-key="og:image:height"
                    property="og:image:height"
                    content="630"
                />
                <meta
                    head-key="og:image:alt"
                    property="og:image:alt"
                    content={social.imageAlt}
                />
                <meta
                    head-key="og:site_name"
                    property="og:site_name"
                    content="Derrick McKinney for Mayor"
                />
                <meta
                    head-key="og:locale"
                    property="og:locale"
                    content="en_US"
                />

                <meta
                    head-key="twitter:card"
                    name="twitter:card"
                    content="summary_large_image"
                />
                <meta
                    head-key="twitter:title"
                    name="twitter:title"
                    content={social.title}
                />
                <meta
                    head-key="twitter:description"
                    name="twitter:description"
                    content={social.description}
                />
                <meta
                    head-key="twitter:image"
                    name="twitter:image"
                    content={social.image}
                />
                <meta
                    head-key="twitter:image:alt"
                    name="twitter:image:alt"
                    content={social.imageAlt}
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
