import { CampaignButton } from '@/components/campaign/button';
import type { CampaignContent } from '@/content/campaign';

type CampaignHeaderProps = {
    content: CampaignContent;
    onPrimaryClick: () => void;
};

export function CampaignHeader({
    content,
    onPrimaryClick,
}: CampaignHeaderProps) {
    const navigationItems = [
        { label: 'Why Derrick', href: '#why' },
        { label: 'Priorities', href: '#priorities' },
        { label: 'Meet Derrick', href: '#meet' },
    ];

    return (
        <header className="sticky top-0 z-40 border-b border-navy/10 bg-cream/95 shadow-[0_1px_12px_rgba(18,28,51,0.05)] backdrop-blur-md">
            <div className="campaign-container flex min-h-18 items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
                <a
                    href="#top"
                    className="campaign-focus-ring flex items-center gap-2.5 rounded-sm"
                    aria-label={`${content.candidateName} home`}
                >
                    <img
                        src="/images/mckinney-mark.svg"
                        width={42}
                        height={42}
                        alt=""
                        aria-hidden
                        className="size-10 shrink-0 sm:size-11"
                    />
                    <span>
                        <span className="campaign-display block text-2xl tracking-tight text-navy">
                            {content.wordmark}
                        </span>
                        <span className="mt-0.5 block text-[0.7rem] font-semibold tracking-[0.08em] text-kentucky uppercase">
                            {content.office}
                        </span>
                    </span>
                </a>

                <div className="flex items-center gap-6">
                    <nav
                        aria-label="Campaign sections"
                        className="hidden items-center gap-6 md:flex"
                    >
                        {navigationItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="campaign-focus-ring rounded-sm text-sm font-semibold text-navy/75 transition-colors hover:text-navy"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <CampaignButton
                        type="button"
                        size="sm"
                        onClick={onPrimaryClick}
                        className="shrink-0"
                    >
                        <span className="sm:hidden">Join Us</span>
                        <span className="hidden sm:inline">
                            {content.primaryCta}
                        </span>
                    </CampaignButton>
                </div>
            </div>
        </header>
    );
}
