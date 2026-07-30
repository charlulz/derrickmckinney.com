import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
    kicker?: string;
    title: string;
    description?: string;
    align?: 'left' | 'center';
    className?: string;
    children?: ReactNode;
};

export function SectionHeading({
    kicker,
    title,
    description,
    align = 'left',
    className,
    children,
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                'max-w-2xl space-y-4',
                align === 'center' && 'mx-auto text-center',
                className,
            )}
        >
            {kicker ? <p className="campaign-kicker">{kicker}</p> : null}
            <h2 className="campaign-display text-3xl text-balance sm:text-4xl">
                {title}
            </h2>
            {description ? (
                <p className="text-lg leading-relaxed text-charcoal-muted">
                    {description}
                </p>
            ) : null}
            {children}
        </div>
    );
}
