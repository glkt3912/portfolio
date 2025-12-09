import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { DarkModeProvider } from '@/hooks/useDarkMode';
import { theme } from '@/theme/mantineTheme';
import '../styles/globals.css';
import '@mantine/core/styles.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60, // 1 hour
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Head>
        <title>Portfolio - Full-Stack Developer</title>
        <meta name="title" content="Portfolio - Full-Stack Developer" />
        <meta
          name="description"
          content="Experienced full-stack developer specializing in Next.js, TypeScript, and modern web technologies. View my projects and get in touch for freelance opportunities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL || 'https://yourportfolio.com/'} />
        <meta property="og:title" content="Portfolio - Full-Stack Developer" />
        <meta
          property="og:description"
          content="Experienced full-stack developer specializing in Next.js, TypeScript, and modern web technologies."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={process.env.NEXT_PUBLIC_SITE_URL || 'https://yourportfolio.com/'} />
        <meta property="twitter:title" content="Portfolio - Full-Stack Developer" />
        <meta
          property="twitter:description"
          content="Experienced full-stack developer specializing in Next.js, TypeScript, and modern web technologies."
        />
      </Head>

      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={theme}>
          <Component {...pageProps} />
        </MantineProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}
