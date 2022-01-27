import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/dist/pages/_app';
import Head from 'next/head';
import '../styles/global.css';

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
  return (
    <>
      <Head>
        <title>XDean NextJS Template</title>
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps}/>
      </SessionProvider>
    </>
  );
}

export default MyApp;
