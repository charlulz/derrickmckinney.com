import { cn } from '@/lib/utils';

type PhotoPlaceholderProps = {
    label: string;
    className?: string;
    aspect?: 'portrait' | 'landscape' | 'hero' | 'square';
};

const aspectClasses = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    hero: 'aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[36rem]',
    square: 'aspect-square',
};

export function PhotoPlaceholder({
    label,
    className,
    aspect = 'landscape',
}: PhotoPlaceholderProps) {
    return (
        <div
            role="img"
            aria-label={label}
            className={cn(
                'relative overflow-hidden rounded-[var(--campaign-radius)] border border-navy/10',
                aspectClasses[aspect],
                className,
            )}
            style={{
                background:
                    'linear-gradient(145deg, color-mix(in srgb, var(--color-kentucky) 22%, var(--color-cream-warm)) 0%, color-mix(in srgb, var(--color-navy) 18%, var(--color-cream)) 48%, color-mix(in srgb, var(--color-gold) 16%, var(--color-cream-warm)) 100%)',
            }}
        >
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage:
                        'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.45), transparent 40%), radial-gradient(circle at 80% 70%, rgba(26,39,68,0.18), transparent 45%)',
                }}
            />
            <div className="absolute inset-0 flex items-end p-4 sm:p-5">
                <div className="max-w-sm space-y-2">
                    <span className="campaign-placeholder-label">
                        Photo placeholder
                    </span>
                    <p className="text-sm leading-snug font-medium text-navy/80">
                        {label}
                    </p>
                </div>
            </div>
        </div>
    );
}
