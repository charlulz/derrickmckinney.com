/**
 * Campaign content configuration.
 * All placeholder strings are marked clearly until approved copy is supplied.
 * Do not treat placeholder text as verified biography, policy, or endorsements.
 */

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
    bioPhotoLabel: string;
    signupTitle: string;
    signupIntro: string;
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
        '[PLACEHOLDER] Introduce Derrick with approved biographical facts only—family, work, and community ties in Grayson, Kentucky.',
        '[PLACEHOLDER] Add a second short paragraph on local involvement once verified. Do not invent record, titles, or affiliations.',
    ],
    bioPhotoLabel:
        'Photo placeholder: candid portrait or community setting in Grayson, Kentucky',
    signupTitle: 'Stay Connected',
    signupIntro:
        '[PLACEHOLDER] Get campaign updates by email and text. We’ll only ask for what we need.',
    signupSubmit: 'Join the Campaign',
    signupPrivacy:
        '[PLACEHOLDER] Brief privacy note: how contact info will be used. Link to a full privacy policy when available.',
    finalCtaTitle: 'Ready to help move Grayson forward?',
    finalCtaBody:
        '[PLACEHOLDER] Invite neighbors to join—volunteer, share, or stay informed. Keep the ask warm and local.',
    contactEmailLabel: '[PLACEHOLDER] campaign@example.com',
    contactPhoneLabel: '[PLACEHOLDER] (000) 000-0000',
    socialLinks: [
        { label: 'Facebook', href: '#facebook-placeholder' },
        { label: 'Instagram', href: '#instagram-placeholder' },
    ],
    authorizationDisclaimer:
        '[PLACEHOLDER] Paid for by [Committee Name]. [Required authorization language goes here.]',
    privacyNote:
        '[PLACEHOLDER] Privacy policy link and short statement about data use.',
};

/** Verified endorsements only. Empty until confirmed content is provided. */
export const campaignEndorsements: CampaignEndorsement[] = [];
