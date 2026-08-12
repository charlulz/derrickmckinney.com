<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        <link rel="manifest" href="/site.webmanifest">
        <meta name="theme-color" content="#121c33">
        <link rel="canonical" href="{{ route('home') }}">
        <meta name="description" content="Together, we can build a stronger Grayson. Join Derrick McKinney’s campaign for practical, people-first leadership.">

        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ route('home') }}">
        <meta property="og:title" content="Derrick McKinney for Mayor of Grayson">
        <meta property="og:description" content="Together, we can build a stronger Grayson. Join Derrick McKinney’s campaign for practical, people-first leadership.">
        <meta property="og:image" content="{{ url('/images/derrick-mckinney-social-share.jpg') }}">
        <meta property="og:image:secure_url" content="{{ url('/images/derrick-mckinney-social-share.jpg') }}">
        <meta property="og:image:type" content="image/jpeg">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:image:alt" content="Derrick McKinney for Mayor of Grayson campaign graphic">
        <meta property="og:site_name" content="Derrick McKinney for Mayor">
        <meta property="og:locale" content="en_US">

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Derrick McKinney for Mayor of Grayson">
        <meta name="twitter:description" content="Together, we can build a stronger Grayson. Join Derrick McKinney’s campaign for practical, people-first leadership.">
        <meta name="twitter:image" content="{{ url('/images/derrick-mckinney-social-share.jpg') }}">
        <meta name="twitter:image:alt" content="Derrick McKinney for Mayor of Grayson campaign graphic">

        @if (filled($googleAnalyticsId = config('services.google.analytics_id')))
            {{-- Google tag (gtag.js) --}}
            <script async src="https://www.googletagmanager.com/gtag/js?id={{ $googleAnalyticsId }}"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', @json($googleAnalyticsId));
            </script>
        @endif

        @fonts

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head>
            <title>Derrick McKinney for Mayor of Grayson</title>
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
