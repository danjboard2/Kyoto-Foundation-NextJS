import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <Script strategy="beforeInteractive" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></Script>
  </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
