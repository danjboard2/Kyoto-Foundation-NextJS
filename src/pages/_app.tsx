import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "@upstash/claps/style.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  let scriptRefArr:any = []

  const { route } = useRouter()

  useEffect(() => {
    if (route) {
      const scripts = ['../js/comp-script.js','../js/script.js'];

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
  </>
  )
}
