import Script from 'next/script';
import type { AppProps } from 'next/app'
import Layout from '@/Layout/Layout';

import '../styles/globals.css'
import '../styles/common.css'

function MyApp({ Component, pageProps }: AppProps) {
  const layout = (
    <>
      <Script
        id='ga-id'
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id='ga-analytics'>
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
    `}
      </Script>
      <Component {...pageProps} />
    </>
  )
  return <Layout>{layout}</Layout>
}

export default MyApp






