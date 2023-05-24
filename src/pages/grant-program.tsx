import Image from 'next/image'
import Head from 'next/head';
import Script from 'next/script'
import Link from 'next/link';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import React, { useLayoutEffect, useRef } from 'react';
import { BuilderComponent, builder, useIsPreviewing, Builder } from '@builder.io/react';
builder.init('05829d3eace9455893e1d144d2d4a91a');
export async function getStaticProps() {
    const links = await builder.get('nav-links', {
    }).promise();
  return {
    props: {
      links: links || null,
    },
    revalidate: 5,
  };
}

export default function Home({links, ref}: {links: any, ref: any}) {

  if (typeof window !== "undefined") {
  useLayoutEffect(() => {
   //effect stuff if needed
    }, []); // <- Scope!
}
  return (
    <>
     <Head>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1" />
    <meta name="keywords" content="Kyoto Foundation" />
    <title>Kyoto Protocol - Grants Program</title>
    </Head>
    <div id="pages">
    <div id="foundation"  className="comp">
      <Navbar links={links} className="" />
      </div>
     <section className="w-full flex flex-row bg-lightsuccess h-[460px] relative overflow-hidden">{/* Hero */}
     <div className=" z-10 pt-[88px] w-full lg:w-1/2 lg:min-w-[800px] flex flex-col justify-center px-10 lg:px-32">
      <h1 className="font-bold text-title mb-10">Empowering <span className="italic">Eco-Warriors</span></h1>
      <p className="mb-6 text-lg lg:text-xl">Kyoto's Ecosystem Grants Program is designed to champion pioneering creators who are leading the
charge, in the fight against climate change.</p>
<a href="#" className="bg-accent w-auto flex self-start text-black font-bold py-2 px-8 rounded-full uppercase text-sm md:text-base">Apply now</a>
    </div>
      <Image src="/images/logo-window.png" fill style={{objectFit:"contain"}}  alt="Kyoto Foundation Grant Program" className=" z-0 !w-1/2 opacity-50 absolute  !inset-auto !right-[0px] scale-[2]"></Image>
      </section>
      <section>{/* Planting the seed */}
      <div>
        <h2 className="text-2xl font-bold">Planting <span className="italic">the seed</span></h2>
        <p className="mb-10 text-lg lg:text-xl">Be a part of building an inclusive green economy.</p>
        <a href="#" className="bg-accent  text-black font-bold py-2 px-4 rounded-full uppercase text-sm md:text-base">Apply now</a>
        </div>
        <div className="w-1/2">
          <Image src="https://placehold.co/600x400/png" height={300} width={300} alt="Kyoto Foundation Grant Program"></Image>
        </div>
      </section>
      <section>{/* About */}
      <div>
      <h2 className="text-2xl font-bold">About</h2>
        <p className="mb-10 text-lg lg:text-xl">At Kyoto, we are passionately committed to getting trailblazing teams on-chain, who share our unwavering dedication to sustainability, to build on the Kyoto network. We believe that early-stage investments, across various web3 domains, can pave the way for a greener future.</p>

        <p className="mb-10 text-lg lg:text-xl">Embracing a unified approach, we back founders on their journey to success by offering comprehensive support that goes beyond simple funding. Leveraging the operational prowess,
          technological expertise, extensive distribution networks, and strategic partnerships within the Kyoto
          Ecosystem, we provide an unparalleled foundation for powerful growth and achievement.</p>

          <p className="mb-10 text-lg lg:text-xl">We invite you to join our vibrant community, where we join forces to forge a generational impact,
          through the transformative potential of blockchain technology.</p>

          <p className="mb-10 text-lg lg:text-xl">Together, let's shape a sustainable world that transcends boundaries and empowers future
          generations.</p>
          </div>
          <div>
          <Image src="https://placehold.co/600x400/png" height={300} width={300} alt="Kyoto Foundation Grant Program"></Image>
        </div>
      </section>
      <section>{/* Partner portfolio */}
      <h2 className="text-2xl font-bold">Our partner portfolio</h2>
        <p className="mb-10 text-lg lg:text-xl">Carousel here.</p>
      </section>
      <section>{/* What founders say about us */}
      <h2 className="text-2xl font-bold">What founders say about us</h2>
        <p className="mb-10 text-lg lg:text-xl">Another carousel here.</p>
      </section>
      <section> {/* gain competitive advantage */ }
      <p className="mb-10 text-lg lg:text-xl">Gain a competitive edge in the market and unlock new, green possibilities for your business, via the Kyoto blockchain today.</p>
        <a href="#" className="">Apply now</a>
      </section>
      <section> {/* our team of eco-warriors */}
      <h2 className="text-2xl font-bold">Our team of Eco-Warriors</h2>
      </section>
      <section> {/* Curated thinking */}
      <div>
      <h2 className="text-2xl font-bold">Curated thinking</h2>
      </div>
      <div>
        Article
      </div>
      <div>
        Article
      </div>
      <div>
        Article
      </div>
      </section>
      <section> {/* Connect with a blockchain expert */}
        <h3>Connect with a blockchain expert</h3>
        <p className="mb-10 text-lg lg:text-xl">Book a 1-on-1 consultation to learn how you can use the world’s most advanced blockchain expertise, technology and ecosystem.</p>
        <a href="#" className="">Apply now</a>
      </section>
      <Footer />
    </div>
</>
  )
}
