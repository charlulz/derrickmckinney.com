import { Building2, Route, Store } from 'lucide-react';
import type { CampaignIssue } from '@/content/campaign';
import { cn } from '@/lib/utils';

type IssueCardProps = {
    issue: CampaignIssue;
    index: number;
    highlighted?: boolean;
};

export function IssueCard({
    issue,
    index,
    highlighted = false,
}: IssueCardProps) {
    const Icon =
        issue.id === 'community'
            ? Building2
            : issue.id === 'economy'
              ? Store
              : Route;

    return (
        <article
            id={`priority-${issue.id}`}
            className={cn(
                'group relative overflow-hidden rounded-[var(--campaign-radius)] border p-6 transition-[border-color,box-shadow,background-color,transform] duration-300 sm:p-7',
                highlighted
                    ? 'border-gold/70 bg-cream text-navy shadow-[0_16px_48px_rgba(0,0,0,0.25)] ring-2 ring-gold/25'
                    : 'border-cream/15 bg-cream/5 text-cream hover:-translate-y-1 hover:border-gold/45 hover:bg-cream/10',
            )}
        >
            <div className="flex items-start justify-between gap-4">
                <span
                    className={cn(
                        'flex size-11 items-center justify-center rounded-full border',
                        highlighted
                            ? 'border-gold/35 bg-gold/15 text-navy'
                            : 'border-gold/35 bg-gold/10 text-gold-muted',
                    )}
                    aria-hidden
                >
                    <Icon className="size-5" />
                </span>
                <span
                    className={cn(
                        'text-xs font-bold tracking-[0.14em]',
                        highlighted ? 'text-kentucky' : 'text-cream/45',
                    )}
                >
                    0{index + 1}
                </span>
            </div>

            <h3
                className={cn(
                    'campaign-display mt-12 text-2xl',
                    highlighted ? 'text-navy' : 'text-cream',
                )}
            >
                {issue.title}
            </h3>
            <p
                className={cn(
                    'mt-4 leading-relaxed',
                    highlighted ? 'text-charcoal-muted' : 'text-cream/65',
                )}
            >
                {issue.summary}
            </p>

            <div
                aria-hidden
                className={cn(
                    'absolute right-0 bottom-0 h-1 w-0 bg-gold transition-all duration-300 group-hover:w-full',
                    highlighted && 'w-full',
                )}
            />
        </article>
    );
}
