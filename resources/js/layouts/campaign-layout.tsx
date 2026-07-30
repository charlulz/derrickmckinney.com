import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';

export default function CampaignLayout({ children }: PropsWithChildren) {
    useEffect(() => {
        const root = document.documentElement;
        const hadDark = root.classList.contains('dark');

        root.classList.remove('dark');
        root.style.backgroundColor = '#f6f3ec';

        return () => {
            root.style.backgroundColor = '';

            if (hadDark) {
                root.classList.add('dark');
            }
        };
    }, []);

    return (
        <div id="top" className="campaign min-h-screen">
            {children}
        </div>
    );
}
