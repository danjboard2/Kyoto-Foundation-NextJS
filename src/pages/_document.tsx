import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <Script strategy="beforeInteractive" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></Script>
      <Script strategy="beforeInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></Script>
            <Script strategy="beforeInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></Script>
            <Script strategy="beforeInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollToPlugin.min.js"></Script>
            <Script strategy="lazyOnload" src="/js/script.js"></Script>
            <Script strategy="lazyOnload" src="/js/scroll-script.js"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}