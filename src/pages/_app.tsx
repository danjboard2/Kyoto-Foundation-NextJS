import '@/styles/globals.css'
import Script from 'next/script'
import type { AppProps } from 'next/app'
import "@upstash/claps/style.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
  <Script strategy="beforeInteractive" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></Script>
  <Script strategy="beforeInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></Script>
  <Script strategy="afterInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></Script>
  <Script strategy="afterInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollToPlugin.min.js"></Script>
  <Script strategy="afterInteractive" src="/js/script.js"></Script>
  <Script strategy="lazyOnload" src="/js/scroll-script.js"></Script>
  <Script strategy="lazyOnload" src="/js/basicLightbox.min.js"></Script>
  <Script strategy="afterInteractive" src="https://player.vimeo.com/api/player.js"></Script>
  <Script strategy="afterInteractive" src="//code.tidio.co/zjoi0ajovrui5txvitkzweydom4tlltp.js"></Script>
  <Script strategy="lazyOnload" src="/js/comp-script.js"></Script>
  <Component {...pageProps} />
  </>
  )
}
