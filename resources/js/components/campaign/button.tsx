import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

const campaignButtonVariants = cva(
    'campaign-focus-ring inline-flex items-center justify-center gap-2 rounded-[var(--campaign-radius)] text-base font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-200 active:translate-y-px disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                primary:
                    'bg-navy text-cream shadow-[0_1px_2px_rgba(18,28,51,0.18)] hover:bg-navy-deep',
                secondary:
                    'border border-navy/20 bg-cream text-navy hover:border-navy/35 hover:bg-cream-warm',
                gold: 'bg-gold text-navy-deep shadow-[0_1px_2px_rgba(18,28,51,0.12)] hover:bg-gold-muted',
                link: 'h-auto rounded-sm px-0 text-kentucky underline-offset-4 hover:text-navy hover:underline',
            },
            size: {
                default: 'min-h-12 px-6 py-3',
                sm: 'min-h-10 px-4 py-2 text-sm',
                lg: 'min-h-14 px-8 py-3.5 text-lg',
                full: 'min-h-12 w-full px-6 py-3',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'default',
        },
    },
);

type CampaignButtonProps = ComponentProps<'button'> &
    VariantProps<typeof campaignButtonVariants> & {
        asChild?: boolean;
    };

function CampaignButton({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: CampaignButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            data-slot="campaign-button"
            className={cn(campaignButtonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { CampaignButton, campaignButtonVariants };
