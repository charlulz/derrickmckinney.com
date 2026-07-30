import { cn } from '@/lib/utils';

type PullQuoteProps = {
    quote: string;
    attribution: string;
    role?: string;
    className?: string;
};

export function PullQuote({
    quote,
    attribution,
    role,
    className,
}: PullQuoteProps) {
    return (
        <figure
            className={cn(
                'rounded-[var(--campaign-radius)] border border-navy/10 bg-cream-warm/60 px-6 py-8 sm:px-8',
                className,
            )}
        >
            <blockquote className="campaign-display text-xl leading-snug text-navy sm:text-2xl">
                “{quote}”
            </blockquote>
            <figcaption className="mt-5 text-sm text-charcoal-muted">
                <span className="font-semibold text-charcoal">
                    {attribution}
                </span>
                {role ? <span> — {role}</span> : null}
            </figcaption>
        </figure>
    );
}
