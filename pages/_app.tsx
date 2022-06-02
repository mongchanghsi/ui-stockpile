import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import '../styles/nprogress.scss';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
