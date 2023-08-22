import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export const runtime = 'experimental-edge';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
