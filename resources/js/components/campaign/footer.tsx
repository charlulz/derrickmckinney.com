import type { CampaignContent } from '@/content/campaign';

type CampaignFooterProps = {
    content: CampaignContent;
};

export function CampaignFooter({ content }: CampaignFooterProps) {
    return (
        <footer className="border-t border-cream/10 bg-navy-deep text-cream/80">
            <div className="campaign-container space-y-10 px-5 py-12 sm:px-8 lg:px-10">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <p className="campaign-display text-2xl text-cream">
                            {content.candidateName}
                        </p>
                        <p className="mt-1 text-sm font-semibold tracking-[0.08em] text-gold-muted uppercase">
                            {content.office}
                        </p>
                        <p className="mt-3 text-sm">{content.location}</p>
                    </div>

                    <div className="space-y-2 text-sm">
                        <p className="font-semibold text-cream">Contact</p>
                        <p>{content.contactEmailLabel}</p>
                        <p>{content.contactPhoneLabel}</p>
                    </div>

                    <div className="space-y-2 text-sm">
                        <p className="font-semibold text-cream">Follow</p>
                        <ul className="flex flex-wrap gap-4">
                            {content.socialLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="campaign-focus-ring rounded-sm underline-offset-4 hover:text-cream hover:underline"
                                    >
                                        {link.label}
                                        <span className="sr-only">
                                            {' '}
                                            (placeholder link)
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <p className="pt-2 text-cream/60">
                            {content.privacyNote}
                        </p>
                    </div>
                </div>

                <div className="border-t border-cream/10 pt-6">
                    <p className="max-w-3xl text-xs leading-relaxed text-cream/55">
                        {content.authorizationDisclaimer}
                    </p>
                </div>
            </div>
        </footer>
    );
}
