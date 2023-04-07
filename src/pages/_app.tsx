// ADD GLOBAL STYLING due to convention in _app file
// you can add anything like material ui or bootstrap here
import Footer from '@/components/footer';
import Header from '@/components/header';
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app'
import { ReactNode } from 'react';
import {ThemeProvider} from 'styled-components';

const theme = {
  colors: {
    primary: '#355C7D'
  }
}

interface AppPropsWithLayout extends AppProps {
  Component: NextComponentType<NextPageContext, any, any> | {
    getLayout: ReactNode;
  };
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return <SessionProvider session={pageProps.session}>
    <ThemeProvider theme={theme}>
      {Component.getLayout ?
      Component.getLayout(<Component {...pageProps} />) : <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>}
    </ThemeProvider>
  </SessionProvider>
}
