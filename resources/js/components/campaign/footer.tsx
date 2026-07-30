import { Github } from 'lucide-react';
import type { CampaignContent } from '@/content/campaign';

type CampaignFooterProps = {
    content: CampaignContent;
};

export function CampaignFooter({ content }: CampaignFooterProps) {
    const hasContact =
        content.contactEmailLabel.length > 0 ||
        content.contactPhoneLabel.length > 0;
    const hasSocialLinks = content.socialLinks.length > 0;

    return (
        <footer className="border-t border-cream/10 bg-navy-deep text-cream/80">
            <div className="campaign-container space-y-10 px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-start">
                    <div>
                        <p className="campaign-display text-3xl text-cream">
                            {content.wordmark}
                        </p>
                        <p className="mt-1 text-sm font-semibold tracking-[0.08em] text-gold-muted uppercase">
                            {content.office}
                        </p>
                        <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/60">
                            Practical, people-first leadership for{' '}
                            {content.location}.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 text-sm">
                        <div>
                            <p className="font-bold text-cream">Explore</p>
                            <ul className="mt-3 space-y-2 text-cream/60">
                                <li>
                                    <a
                                        href="#why"
                                        className="campaign-focus-ring rounded-sm hover:text-cream"
                                    >
                                        Why Derrick
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#priorities"
                                        className="campaign-focus-ring rounded-sm hover:text-cream"
                                    >
                                        Priorities
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#signup"
                                        className="campaign-focus-ring rounded-sm hover:text-cream"
                                    >
                                        Get involved
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {(hasContact || hasSocialLinks) && (
                            <div>
                                <p className="font-bold text-cream">Connect</p>
                                <ul className="mt-3 space-y-2 text-cream/60">
                                    {hasContact &&
                                        content.contactEmailLabel && (
                                            <li>{content.contactEmailLabel}</li>
                                        )}
                                    {hasContact &&
                                        content.contactPhoneLabel && (
                                            <li>{content.contactPhoneLabel}</li>
                                        )}
                                    {content.socialLinks.map((link) => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                className="campaign-focus-ring rounded-sm hover:text-cream"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid gap-5 border-t border-cream/10 pt-6 text-xs leading-relaxed text-cream/45 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                    <div className="space-y-2">
                        <p className="max-w-3xl">{content.privacyNote}</p>
                        <p>
                            <a
                                href="https://github.com/charlulz/derrickmckinney.com"
                                target="_blank"
                                rel="noreferrer"
                                className="campaign-focus-ring inline-flex items-center gap-1.5 rounded-sm font-semibold text-cream/65 underline underline-offset-2 transition-colors hover:text-cream"
                            >
                                <Github aria-hidden className="size-3.5" />
                                View this website’s public source
                            </a>
                        </p>
                        <p className="max-w-3xl">
                            © {new Date().getFullYear()} Derrick McKinney for
                            Mayor.
                        </p>
                    </div>
                    <div className="space-y-2 lg:max-w-md lg:text-right">
                        <p>
                            Courthouse reference photograph by{' '}
                            <a
                                href="https://commons.wikimedia.org/wiki/File:Carter_County%2C_Kentucky_courthouse.jpg"
                                target="_blank"
                                rel="noreferrer"
                                className="campaign-focus-ring rounded-sm underline underline-offset-2 hover:text-cream"
                            >
                                W.marsh
                            </a>{' '}
                            / CC BY-SA.
                        </p>
                        <p className="font-semibold text-cream/65">
                            {content.authorizationDisclaimer}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
