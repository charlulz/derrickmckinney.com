/** Campaign content configuration. Draft messaging requires campaign approval. */

export type CampaignIssue = {
    id: string;
    title: string;
    summary: string;
};

export type CampaignEndorsement = {
    name: string;
    role: string;
    quote: string;
};

export type CampaignWhyPoint = {
    title: string;
    description: string;
};

export type CampaignContent = {
    candidateName: string;
    office: string;
    location: string;
    wordmark: string;
    primaryCta: string;
    secondaryCta: string;
    heroMessage: string;
    heroSupporting: string;
    /**
     * Describes the hero photograph for screen readers and failed image loads.
     * Kept deliberately factual: update once the people pictured and the
     * location are confirmed by the campaign.
     */
    heroPhotoAlt: string;
    whyTitle: string;
    whyStatement: string;
    whyBody: string;
    whyPoints: CampaignWhyPoint[];
    issuesTitle: string;
    issuesIntro: string;
    issues: CampaignIssue[];
    bioTitle: string;
    bioBody: string[];
    bioValues: string[];
    bioPhotoAlt: string;
    signupTitle: string;
    signupIntro: string;
    signupBenefits: string[];
    signupSubmit: string;
    signupPrivacy: string;
    finalCtaTitle: string;
    finalCtaBody: string;
    contactEmailLabel: string;
    contactPhoneLabel: string;
    socialLinks: { label: string; href: string }[];
    authorizationDisclaimer: string;
    privacyNote: string;
};

export const campaignContent: CampaignContent = {
    candidateName: 'Derrick McKinney',
    office: 'For Mayor of Grayson',
    location: 'Grayson, Kentucky',
    wordmark: 'McKinney',
    primaryCta: 'Join the Campaign',
    secondaryCta: 'See Priorities',
    heroMessage: 'Together, we can build a stronger Grayson.',
    heroSupporting:
        'Join Derrick McKinney’s campaign for practical, people-first leadership and a city where every neighbor has a voice.',
    heroPhotoAlt:
        'Derrick McKinney and his wife standing in front of the Carter County Courthouse in Grayson',
    whyTitle: 'Why I’m Running',
    whyStatement:
        'Grayson deserves leadership that listens carefully, works honestly, and keeps its focus on the people who call this city home.',
    whyBody:
        'I’m running for mayor because local government should feel local: accessible, responsive, and focused on the everyday issues that shape life in our community. This campaign is about bringing neighbors together, setting clear priorities, and doing the work to move Grayson forward.',
    whyPoints: [
        {
            title: 'Listen First',
            description:
                'Leadership begins by hearing from the people who live, work, and raise their families here.',
        },
        {
            title: 'Focus on the Basics',
            description:
                'Keep city government practical, responsive, and centered on the services residents count on.',
        },
        {
            title: 'Move Forward Together',
            description:
                'Build common ground and make steady progress with the whole community in mind.',
        },
    ],
    issuesTitle: 'What Matters Most',
    issuesIntro:
        'A practical agenda starts with the things residents experience every day—and a city government that stays focused on delivering results.',
    issues: [
        {
            id: 'community',
            title: 'Reliable City Services',
            summary:
                'Keep city government responsive, communicate clearly, and focus attention on the dependable day-to-day services residents count on.',
        },
        {
            id: 'economy',
            title: 'Small Business & Opportunity',
            summary:
                'Work alongside local businesses and community partners to make Grayson a place where good ideas and local investment can grow.',
        },
        {
            id: 'future',
            title: 'A Safe, Connected Future',
            summary:
                'Plan carefully for infrastructure, public spaces, and responsible growth while protecting the community character people value.',
        },
    ],
    bioTitle: 'Meet Derrick',
    bioBody: [
        'For Derrick, leadership starts with showing up, listening carefully, and treating every resident with respect.',
        'He is running to bring a practical, community-minded approach to City Hall—one centered on clear communication, steady work, and decisions guided by what is best for Grayson.',
    ],
    bioValues: ['Present', 'Practical', 'People-first'],
    bioPhotoAlt:
        'Portrait of Derrick McKinney standing on a tree-lined downtown sidewalk',
    signupTitle: 'Stay Connected',
    signupIntro:
        'Winning a local campaign takes neighbors who are ready to stay informed, lend a hand, and help carry the conversation across Grayson.',
    signupBenefits: [
        'Receive campaign news and event updates',
        'Hear about opportunities to volunteer',
        'Help Derrick connect with more neighbors',
    ],
    signupSubmit: 'Join the Campaign',
    signupPrivacy:
        'By joining, you agree to receive campaign updates by email and text. Message and data rates may apply. Reply STOP to opt out.',
    finalCtaTitle: 'Let’s move Grayson forward—together.',
    finalCtaBody:
        'Every conversation, every shared post, and every neighbor who gets involved helps build a campaign rooted in the community it hopes to serve.',
    contactEmailLabel: '',
    contactPhoneLabel: '',
    socialLinks: [],
    authorizationDisclaimer:
        'Campaign authorization statement pending committee confirmation. This statement must be finalized before public launch.',
    privacyNote:
        'Your information will be used only for campaign communications and participation.',
};

/** Verified endorsements only. Empty until confirmed content is provided. */
export const campaignEndorsements: CampaignEndorsement[] = [];
