import Image from 'next/image'
import Head from 'next/head';
import Script from 'next/script'
import Link from 'next/link';
import Iframe from 'react-iframe'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import $ from "jquery"
import { BuilderComponent, builder, useIsPreviewing, Builder } from '@builder.io/react';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
builder.init('05829d3eace9455893e1d144d2d4a91a');
/*
  Initialize the Builder SDK with your organization's API Key
  The API Key can be found on: https://builder.io/account/settings
*/
export async function getStaticProps() {
  /*
    Fetch the first page from Builder that matches the current URL.
    The `userAttributes` field is used for targeting content,
    learn more here: https://www.builder.io/c/docs/targeting-with-builder
  */
    const links = await builder.get('nav-links', {
      // You can use options for queries, sorting, and targeting here
      // https://github.com/BuilderIO/builder/blob/main/packages/core/docs/interfaces/GetContentOptions.md
    }).promise();
    

  return {
    props: {
      links: links || null,
    },
    revalidate: 5,
  };
}

export default function Home({links, ref}: {links: any, ref: any}) {
  const tl = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const elem = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const indicators = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const pinner = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  if (typeof window !== "undefined") {
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      ScrollTrigger.defaults({
        markers:false
      })
      
      var points =gsap.utils.toArray<HTMLDivElement>('.point')
      var indicators = gsap.utils.toArray<HTMLDivElement>('.indicator')
      
      var height = 110 * points.length;
      
      gsap.set('.indicators', {display: "flex"});

      
      var tl = gsap.timeline({
        duration: points.length,
        scrollTrigger: {
        //trigger: ".philosophie",
          start: "center center",
          end: "+="+height+"%",
          scrub: true,
          //id: "points",
          //markers: true
        }
      })
      
      var pinner = gsap.timeline({
        scrollTrigger: {
          start: "top top",
          end: "+="+height+"%",
          scrub: true,
          pin: ".philosophie .wrapper",
          pinSpacing: true,
          id: "pinning",
          markers: false
        }
      })
      
      
      
      points.forEach(function(elem: any, i: number) {
        
        gsap.set(elem, {position: "absolute", top: 0});
      
        tl.to(indicators[i], {backgroundColor: "#052c29", duration: 0.25}, i)
        tl.from(elem.querySelector('article'), {autoAlpha:0, translateY: 100}, i)
        
        tl.addLabel('position-' + i)  // Adding a label here, with the index as unique identifier
        
        if (i != points.length-1) {
          tl.to(indicators[i], {backgroundColor: "#adadad", duration: 0.25}, i+0.75)
          tl.to(elem.querySelector('article'), {autoAlpha:0, translateY: -100}, i + 0.75)
        }
        
      });
      
      
      // Looping over all the indicators...
      indicators.forEach( function(indicator: any, i: number) {
        // ...forEach of them adding a click-event listener...
        indicator.addEventListener('click', function() {
          console.log()
          // ...leveraging the ScrollToPlugin and ...
          // ...ScrollTrigger's  labelToScroll() method
          gsap.to(window, { 
            duration: 1, 
            scrollTo: tl.scrollTrigger?.labelToScroll(`position-${i}`)
          });
          
        })
        
      })
      
    }, tl); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);
}
  return (
    <>
      <Script strategy="afterInteractive" src="/js/basicLightbox.min.js" defer></Script>
      <Script strategy="afterInteractive" src="https://player.vimeo.com/api/player.js"></Script>
      <Script strategy="afterInteractive" src="//code.tidio.co/zjoi0ajovrui5txvitkzweydom4tlltp.js"></Script>
     <Head>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1" />
    <meta name="keywords" content="Kyoto Foundation" />
    <meta name="author"	content="Daniel Board" />
    <title>Kyoto Protocol - Home</title>
    </Head>
    <div id="foundation">

      <Navbar links={links}  />
      <section id="topbox">
      <Iframe className="bg-video" url="https://player.vimeo.com/video/818970225?h=77fe4aee3e&autoplay=1&loop=1&muted=1&title=0&byline=0&portrait=0&background=1" frameBorder={0} allow="autoplay"/>
        <div className="video-overlay"></div>
        <div id="contents">
            <div id="logo-login">
            </div>
            <div className="text">
              <h1>A Carbon Negative Blockchain</h1>
              <p>Built to scale the Voluntary Carbon Market and regenerative finance harnessing the power of Web3.</p>
              <Link href="#scroller" className="butn"><span>Learn more</span></Link>
            </div>

            <div className="socials">
              <div className="ticker">
                <h4>Trees planted so far</h4>
                <div className="inner-ticker"><p>20,322</p></div>
              </div>
              <div className="socials">
                <Link href="https://discord.gg/kyotoprotocol" target="_blank"><figure><Image src="/images/social/discord.png" fill style={{objectFit:"contain"}}  alt="Social logo"/></figure></Link>
                <Link href="https://twitter.com/official_kpio" target="_blank"><figure><Image src="/images/social/twitter.png" fill style={{objectFit:"contain"}} alt="Social logo"/></figure></Link>
                <Link href="https://medium.com/@KyotoProtocol.io" target="_blank"><figure><Image src="/images/social/medium.png" fill style={{objectFit:"contain"}} alt="Social logo"/></figure></Link>
                <Link href="https://www.youtube.com/channel/UCIijeBIESm9rnnckEwbU14g" target="_blank"><figure><Image src="/images/social/youtube.png" fill style={{objectFit:"contain"}} alt="Social logo"/></figure></Link>
                <Link href="https://t.me/KyotoProtocol" target="_blank"><figure><Image src="/images/social/telegram.png" fill style={{objectFit:"contain"}} alt="Social logo"/></figure></Link>
                <Link href="https://www.linkedin.com/company/kyotoprotocol-io/" target="_blank"><figure><Image src="/images/social/linkedin.png" fill style={{objectFit:"contain"}} alt="Social logo"/></figure></Link>
              </div>
            </div>
        </div>
      </section>
    <section id="fast">
      <div className="slogan">
    <figure>
      <svg width="90" height="94" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M47.3986 41.6742C47.3986 46.267 43.6806 50 39.0837 50C34.4869 50 30.7689 46.267 30.7689 41.6742C30.7689 37.0814 27.1635 33.4389 22.6793 33.3484C22.6117 33.3258 22.5441 33.3258 22.4765 33.3258C22.4089 33.3258 22.3413 33.3258 22.2737 33.3484C17.767 33.2353 14.1616 29.5475 14.1616 25C14.1616 20.4525 17.767 16.7873 22.2737 16.6968H22.6793C27.1635 16.5837 30.7689 12.8959 30.7689 8.34842C30.7689 3.8009 34.4869 0 39.0837 0C43.6806 0 47.3986 3.73303 47.3986 8.34842C47.3986 12.9638 43.7932 16.5837 39.3091 16.6968C39.2415 16.6742 39.1513 16.6742 39.0837 16.6742C39.0161 16.6742 38.9485 16.6742 38.8809 16.6968C34.3742 16.7873 30.7689 20.4751 30.7689 25C30.7689 29.5249 34.3742 33.2353 38.8809 33.3484H39.3091C43.7932 33.4389 47.3986 37.1267 47.3986 41.6742Z" fill="#052C29"></path>
        <path d="M7.94798 16.7629C12.3375 16.7629 15.896 13.1397 15.896 8.67037C15.896 4.20101 12.3375 0.577881 7.94798 0.577881C3.55843 0.577881 0 4.20101 0 8.67037C0 13.1397 3.55843 16.7629 7.94798 16.7629Z" fill="#052C29"></path>
        <path d="M7.94798 49.9998C12.3375 49.9998 15.896 46.2473 15.896 41.6183C15.896 36.9893 12.3375 33.2368 7.94798 33.2368C3.55843 33.2368 0 36.9893 0 41.6183C0 46.2473 3.55843 49.9998 7.94798 49.9998Z" fill="#052C29"></path>
        </svg>
    </figure><br/>
    <h2>Fast. <span>Green.</span> Secure.</h2></div>
    <p>The Kyoto blockchain is EVM compatible, fast, secure and reliable with low transaction costs.</p>
    <Link href="#" className="butn developers"><span>Build on Kyoto</span></Link>
    </section>
        <section className="philosophie" id="scroller" ref={tl} >
          <div className="wrapper" ref={pinner}>
          <div className="indicators" ref={indicators}>
            <div className="indicator" ></div>
            <div className="indicator" ></div>
            <div className="indicator"  ></div>
            <div className="indicator" ></div>
            
          </div>
          <figure className="scroll-logo">
            <Image src="/images/logo-window.png" alt="logo window" width={1000} height={1000}/>
            </figure>
          <div className="point"  id="section3">
            <article id="three" ref={elem}>
              <h3><b>CARBON NEGATIVE</b>
          <br/><i>BY DESIGN</i></h3>
              <p>The Kyoto blockchain is the first blockchain to contribute 25% of each transactional gas fee to offset carbon emissions via reforestation.</p>
              <p>Any user, DeFi protocol or business can passively contribute towards fighting climate change, simply by using the Kyoto Network.</p>
            </article>
            </div>
            <div className="point"  id="section4">
            <article id="four"  ref={elem}>
              <h3><b>ReFi.</b>
          <br/><i>REDEFINED</i></h3>
              <p>The Kyoto blockchain is built from the ground up to maximise the positive impact made by regenerative finance projects. </p>
          
          <p>The Kyoto ecosystem is a force multiplier that accelerates the positive impact made, whilst boosting transactional volume & TVL on the Kyoto Blockchain.</p>
            </article>
            </div>
          <div className="point" id="section1">
            <article id="one"  ref={elem}>
            <h3><b>CONSERVATION</b> <br/><i>FOCUSED</i></h3>
            <p>We are committed to scaling global conservation, protecting crucial biodiversity and helping make a difference in the fight against climate change.</p>
        
        <p>We are active in large scale forest protection and reforestation projects. We help reduce green house gas emissions, protect against habitat loss and support developing local economies.</p>
        
        <p className="third">These initiatives are funded by the verification and sale of verified emission reductions (carbon credits) on the Kyoto blockchain.</p>
            </article>
          </div>
          <div className="point" id="section2">
            <article id="two"  ref={elem}>
            <h3><b>OFFSET.</b>
        <br/><i>ONCHAIN</i></h3>
            <p>Blockchain technology can keep a secure and transparent ledger for the whole supply chain involved in the creation and tokenisation of carbon assets.</p>
        <p>Mitigating fraud, double counting and creating a more cost effective solution for companies and individuals offsetting in the voluntary carbon market.</p>
        
        <p><Link href="https://www.kyotoswap.io/impact" target="_blank" className="butn"><span>Plant trees with us</span></Link></p>
            </article>
          </div>
          </div>
        </section>
      <Footer />
    </div>
</>
  )
}
