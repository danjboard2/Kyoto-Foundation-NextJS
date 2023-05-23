import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import  Script  from 'next/script'
import "@upstash/claps/style.css";
import { useEffect } from "react";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }: AppProps) {

  let scriptRefArr:any = []

  const { route } = useRouter()

  useEffect(() => {
    if (route) {
      const scripts = ['../js/script.js'];

      for (let item of scripts) {
        loadScript(item);
      }
    }

    return () => {
      if (scriptRefArr.length > 0) {
        removeScript()
      }

    }

  }, [route]);

  const loadScript = (src:any) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    if (!scriptRefArr.find((item: { url:any; }) => item.url === src)) {
      document.body.appendChild(script);
      scriptRefArr.push({ url: src, script })
    }
  }

  const removeScript = () => {
    scriptRefArr.forEach((item: { script:any; }) => {
      if (document.body.contains(item.script)) {
        document.body.removeChild(item.script);
      }
    })

  }
  return (
    <>
  <Component {...pageProps} />
  { /* <Script
  strategy="afterInteractive"
   dangerouslySetInnerHTML={{ 
     __html: `{!function(m,a,i,t,r,e){if(m.RH)return;r=m.RH={},r.uuid=t,r.loaded=0,r.base_url=i,r.queue=[],m.rht=function(){r.queue.push(arguments)};e=a.getElementsByTagName('script')[0],c=a.createElement('script');c.async=!0,c.src=i+'/widget/'+t+'.js?cacheControl=${+new Date()}',e.parentNode.insertBefore(c,e)}(window,document,'https://app.referralhero.com','MF8be2443541')}`
   }} />  */}
  </>
  )
}
