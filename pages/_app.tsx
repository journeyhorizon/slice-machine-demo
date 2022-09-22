import { useMemo } from 'react';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { axiosFetcher } from '@utils/apiHelpers';
import { IntlProvider } from 'react-intl';
import config from '@config/index';
import Router, { useRouter } from 'next/router';
import nProgress from 'nprogress';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

// Flex template application uses English translations as default.
import enMessages from '../translations/en.json';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@src/styles/sanitize.css';
import '@src/styles/globals.css';
import '@src/styles/nprogress.css';

// const isDev = process.env.NEXT_PUBLIC_ENV === 'development';
// const isStaging = process.env.NEXT_PUBLIC_ENV === 'staging';
// const iProduction = process.env.NEXT_PUBLIC_ENV === 'production';

function MainApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split('-') : ['en'];

  const messages = useMemo(() => {
    switch (shortLocale) {
      case 'en':
        return enMessages;
      default:
        return enMessages;
    }
  }, [shortLocale]);

  return (
    <SWRConfig
      value={{
        refreshInterval: 1000 * 60 * 60,
        fetcher: axiosFetcher,
      }}>
      <IntlProvider
        locale={config.locale}
        messages={messages}
        onError={() => null}>
        <Component {...pageProps} />
      </IntlProvider>
    </SWRConfig>
  );
}

export default MainApp;
