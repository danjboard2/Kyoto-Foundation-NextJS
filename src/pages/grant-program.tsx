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
      <section className="w-full flex flex-row px-28 min-h-[500px] ">{/* Planting the seed */}
      <div className="w-1/2 px-4 justify-center flex flex-col">
        <h2 className="text-4xl font-bold  mb-6">Planting <span className="italic">the seed</span></h2>
        <p className="mb-10 text-lg lg:text-xl">Be a part of building an inclusive green economy.</p>
        <a href="#"  className="bg-accent w-auto flex self-start text-black font-bold py-2 px-8 rounded-full uppercase text-sm md:text-base">Apply now</a>
        </div>
        <div className="w-1/2  justify-center flex flex-col">
          <Image src="https://placehold.co/600x400/png" height={300} width={300} className="self-center" alt="Kyoto Foundation Grant Program"></Image>
        </div>
      </section>
      <section className="w-full flex flex-row px-28 min-h-[500px] ">{/* About */}
      <div className="w-1/2 px-4 justify-center flex flex-col">
      <h2 className="text-4xl font-bold mb-6">About</h2>
        <p className="mb-6 text-lg lg:text-xl">At Kyoto, we are passionately committed to getting trailblazing teams on-chain, who share our unwavering dedication to sustainability, to build on the Kyoto network. We believe that early-stage investments, across various web3 domains, can pave the way for a greener future.</p>

        <p className="mb-6 text-lg lg:text-xl">Embracing a unified approach, we back founders on their journey to success by offering comprehensive support that goes beyond simple funding. Leveraging the operational prowess,
          technological expertise, extensive distribution networks, and strategic partnerships within the Kyoto
          Ecosystem, we provide an unparalleled foundation for powerful growth and achievement.</p>

          <p className="mb-6 text-lg lg:text-xl">We invite you to join our vibrant community, where we join forces to forge a generational impact,
          through the transformative potential of blockchain technology.</p>

          <p className="mb-6 text-lg lg:text-xl">Together, let's shape a sustainable world that transcends boundaries and empowers future
          generations.</p>
          </div>
          <div className="w-1/2  justify-center flex flex-col">
          <Image src="https://placehold.co/600x400/png" height={300} width={300} className="self-center" alt="Kyoto Foundation Grant Program"></Image>
        </div>
      </section>
      <section className="w-full flex flex-col px-32 py-20 mt-20 min-h-[500px] bg-lightsuccess place-content-center shadow-inner-lg shadow-gray-300">{/* Partner portfolio */}
      <h2 className="text-4xl font-bold mb-10">Our partner <span className="italic">portfolio</span></h2>
        <div className="w-full flex flex-row justify-between">
          <div className="w-[24%] min-h-[200px] bg-white shadow-inner-lg shadow-gray-300 rounded-lg flex items-center justify-center"><p className="text-lg lg:text-xl">Partner</p></div>
          <div className="w-[24%] min-h-[200px] bg-white shadow-inner-lg shadow-gray-300 rounded-lg flex items-center justify-center"><p className="text-lg lg:text-xl">Partner</p></div>
          <div className="w-[24%] min-h-[200px] bg-white shadow-inner-lg shadow-gray-300 rounded-lg flex items-center justify-center"><p className="text-lg lg:text-xl">Partner</p></div>
          <div className="w-[24%] min-h-[200px] bg-white shadow-inner-lg shadow-gray-300 rounded-lg flex items-center justify-center"><p className="text-lg lg:text-xl">Partner</p></div>
        </div>
      </section>
      <section className="w-full flex flex-col px-32 py-10 pb-28 mt-20 min-h-[500px] place-content-center">{/* What founders say about us */}
      <h2 className="text-4xl font-bold mb-10">What founders say <span className="italic">about us</span></h2>
      <div className="w-full flex flex-row justify-between items-center">
      <div className="w-[24%] h-[300px] bg-white shadow-inner-lg shadow-gray-300 rounded-lg flex items-center justify-center opacity-40">Founder quote</div>
          <div className="w-[44%] bg-white shadow-inner-lg shadow-gray-300 rounded-lg flex flex-col p-20 items-center justify-center">
          <p className="mb-6 text-lg lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum augue ut ullamcorper lacinia. Sed sit amet efficitur urna. Etiam laoreet sodales ligula, a scelerisque lacus dignissim at. Phasellus nec massa nec velit faucibus malesuada et ac purus.</p>
          <p className="mb-0 text-lg lg:text-xl">Proin non ligula ut nibh finibus porta id vitae lacus. Nulla facilisi. Etiam eget consectetur quam. Morbi non turpis ac justo molestie malesuada ut elementum sem. Mauris commodo semper magna nec auctor. Vestibulum eu nisi vitae metus finibus lobortis sit amet sit amet magna.</p>
          <p className="mt-6 text-lg lg:text-xl w-full"><strong className=" font-bold">- Important Founder Person</strong></p>
          </div>
          <div className="w-[24%] h-[300px] bg-white shadow-inner-lg shadow-gray-300 rounded-lg flex items-center justify-center opacity-40">Founder quote</div>
        </div>
      </section>
      <section className="bg-secondarylt flex flex-row w-full py-6 shadow-inner shadow-gray-800"> {/* gain competitive advantage */ }
      <div className="w-1/2 flex items-center justify-center">
        <p className="flex font-medium ml-32 text-white text-lg lg:text-xl">Gain a competitive edge in the market and unlock new, green possibilities for your business, via the Kyoto blockchain today.</p>
      </div>
      <div className="w-1/2 flex items-center justify-center">
      <a href="#" className="bg-accent w-auto inline-flex center text-black font-bold py-2 px-8 rounded-full uppercase text-sm md:text-base">Apply now</a>
      </div>
      </section>
      <section className="w-full flex flex-col px-32 pt-20 min-h-[500px]"> {/* our team of eco-warriors */}
      <h2 className="text-4xl font-bold mb-10">Our team <span className="italic">of Eco-Warriors</span></h2>
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-row w-[49.5%] justify-between flex-wrap">
          <div className="w-[32%]">
            <Image src="https://placehold.co/600x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
          <div className="w-[32%]">
            <Image src="https://placehold.co/600x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
          <div className="w-[32%]">
            <Image src="https://placehold.co/600x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
          <div className="w-[32%] mt-6">
            <Image src="https://placehold.co/600x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
          <div className="w-[32%] mt-6">
            <Image src="https://placehold.co/600x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
          <div className="w-[32%]  mt-6">
            <Image src="https://placehold.co/600x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
        </div>
        {/* Second block of team members */}
        <div className="flex flex-row w-[49.5%] justify-between flex-wrap">
          <div className="w-[32%]">
            <Image src="https://placehold.co/600x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
          <div className="w-[32%]">
            <Image src="https://placehold.co/600x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
          <div className="w-[32%]">
            <Image src="https://placehold.co/600x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
          <div className="w-[32%] mt-6">
            <Image src="https://placehold.co/600x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
          <div className="w-[32%] mt-6">
            <Image src="https://placehold.co/600x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
          <div className="w-[32%]  mt-6">
            <Image src="https://placehold.co/600x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
        </div>
      </div>
      </section>
      <section className="w-full flex flex-col px-32 pt-20 min-h-[500px]"> {/* Curated thinking */}
      <h2 className="text-4xl font-bold mb-10">Curated <span className="italic">thinking</span></h2>
      <div className="flex flex-row w-full justify-between">
          <div className="w-[32%] min-h-[300px] bg-secondary rounded-lg flex items-center justify-center font-bold text-white">
            Connect to Builder API...
          </div>
          <div className="w-[32%] min-h-[300px] bg-secondary rounded-lg flex items-center justify-center font-bold text-white">
          Connect to Builder API...
          </div>
          <div className="w-[32%] min-h-[300px] bg-secondary rounded-lg flex items-center justify-center font-bold text-white">
          Connect to Builder API...
          </div>
      </div>
      </section>
      <section className="w-full flex flex-row px-32 py-10 mt-20 mb-20 bg-lightsuccess place-content-center shadow-inner-lg shadow-gray-300 border-b-[30px] border-secondarylt"> {/* Connect with a blockchain expert */}
      <div className="flex w-1/2 flex-col">
      <h3 className="text-3xl font-bold mb-4">Connect with a blockchain expert</h3>
        <p className="mb-0 text-lg lg:text-xl">Book a 1-on-1 consultation to learn how you can use the world’s most advanced blockchain expertise, technology and ecosystem.</p>
        </div>
        <div className="flex w-1/2 items-center justify-center">
        <a href="#" className="bg-accent w-auto inline-flex center text-black font-bold py-2 px-8 rounded-full uppercase text-sm md:text-base">Let's talk</a>
        </div>
      </section>
      <Footer />
    </div>
</>
  )
}
