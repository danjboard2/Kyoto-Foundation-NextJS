import Image from 'next/image'
import Head from 'next/head';
import Script from 'next/script'
import Link from 'next/link';
import dynamic from "next/dynamic";
// dynamically require owl
import '@codevadmin/owl.carousel/dist/assets/owl.carousel.css';
typeof window !== "undefined" ? require('@codevadmin/owl.carousel') : null;
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Partners from '../../components/Partners'
import PastReportsGrants from '../../components/PastReportsGrants'
import React, { useEffect, useRef, useState } from 'react';
import { BuilderComponent, builder, useIsPreviewing, Builder } from '@builder.io/react';
import { useKeenSlider } from 'keen-slider/react'
builder.init('05829d3eace9455893e1d144d2d4a91a');
const articlesPerPage = 30;
/*
  Initialize the Builder SDK with your organization's API Key
  The API Key can be found on: https://builder.io/account/settings
*/
export async function getStaticProps() {
  const articles = await builder.getAll("article", {
    // Include references, like our `author` ref
    options: { includeRefs: true },
    // For performance, don't pull the `blocks` (the full blog entry content)
    // when listing
    omit: "data.blocks",
    limit: articlesPerPage,
  });

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
      articles,
      links: links || null,
    },
    revalidate: 5,
  };
}

export default function Home({links, ref, articles}: {links: any, ref: any, articles:any}) {

  if (typeof window !== "undefined") {
  useEffect(() => {
    $('#customers-testimonials').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots:true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
  });
    }, []); // <- Scope!
}
  return (
    <>
     <Head>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1" />
    <meta name="keywords" content="Kyoto Foundation" />
    <title>Kyoto Protocol - Grant Program</title>
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
      <div className="flex flex-row">
      <a href="#" className="bg-accent w-auto flex self-start text-black font-bold py-2 px-8 mr-2 rounded-full uppercase text-sm md:text-base">Apply now</a>
      <a href="#" className="bg-success w-auto flex self-start text-black font-bold py-2 px-8 rounded-full uppercase text-sm md:text-base">Learn more</a>
      </div>
    </div>
      <Image src="/images/logo-window.png" fill style={{objectFit:"contain"}}  alt="Kyoto Foundation Grant Program" className=" z-0 !w-1/2 opacity-50 absolute  !inset-auto !right-[0px] scale-[2]"></Image>
      </section>
      <section className="w-full flex flex-col lg:flex-row px-2 lg:px-16 xl:px-28 min-h-[500px] ">{/* Planting the seed */}
      <div className="w-full lg:w-1/2 px-4 justify-center flex flex-col">
        <h2 className="text-4xl font-bold  mb-6 mt-6">Planting <span className="italic">the seed</span></h2>
        <p className="mb-6 text-lg lg:text-xl">Be a part of building an inclusive green economy.</p>
        <p className="mb-6 text-lg lg:text-xl">We invite you to join our vibrant community, where we join forces to forge a generational impact,
          through the transformative potential of blockchain technology.</p>

          <p className="mb-6 text-lg lg:text-xl">Together, let's shape a sustainable world that transcends boundaries and empowers future
          generations.</p>
        <a href="#"  className="bg-accent w-auto flex self-start text-black font-bold py-2 px-8 rounded-full uppercase text-sm md:text-base">Apply now</a>
        </div>
        <div className="w-full lg:max-w-[650px] h-[500px] lg:ml-8 justify-center flex flex-col overflow-hidden scale-[65%]">
        <script src="https://player.vimeo.com/api/player.js"></script>
        <iframe src="https://player.vimeo.com/video/832069314?h=d90940c6ad&badge=0&autoplay=1&autopause=0&loop=1&title=0&byline=0&portrait=0&muted=1"   className=" lg:ml-2 pt-12 lg:scale-125 h-full overflow-hidden" frameBorder="0" allow="autoplay"></iframe>
        </div>
      </section>
      <section className="w-full flex flex-col lg:flex-row  px-2 lg:px-16 xl:px-28 min-h-[500px] ">{/* About */}
      <div className="w-full lg:w-1/2 px-4 justify-center flex flex-col">
      <h2 className="text-4xl font-bold mb-6">About</h2>
        <p className="mb-6 text-lg lg:text-xl">At Kyoto, we are passionately committed to getting trailblazing teams on-chain, who share our unwavering dedication to sustainability, to build on the Kyoto network. We believe that early-stage investments, across various web3 domains, can pave the way for a greener future.</p>

        <p className="mb-6 text-lg lg:text-xl">Embracing a unified approach, we back founders on their journey to success by offering comprehensive support that goes beyond simple funding. Leveraging the operational prowess,
          technological expertise, extensive distribution networks, and strategic partnerships within the Kyoto
          Ecosystem, we provide an unparalleled foundation for powerful growth and achievement.</p>
          </div>
          <div className="w-full lg:max-w-[650px] h-[500px] lg:ml-8 justify-center flex flex-col overflow-hidden scale-[85%]">
            <iframe src="https://player.vimeo.com/video/832056257?h=b810376e63&badge=0&autoplay=1&autopause=0&loop=1&title=0&byline=0&portrait=0&muted=1" className=" lg:ml-8 pt-12 lg:scale-125 h-full overflow-hidden" frameBorder="0" allow="autoplay"></iframe>
        </div>
      </section>
      <section className="w-full flex flex-col  px-6 lg:px-20 xl:px-32 py-20 mt-20 min-h-[500px] bg-lightsuccess place-content-center shadow-inner-lg shadow-gray-300">{/* Partner portfolio */}
      <h2 className="text-4xl font-bold mb-10">Our partner <span className="italic">portfolio</span></h2>
        <div className="w-full flex flex-row justify-between">
        <section className="flex flex-col w-full items-center justify-center overflow-hidden relative">
      <div className='flex w-[75%] md:w-[90%] my-10'>
      <Partners/>
      </div>
      </section>
        </div>
      </section>
      <section className="w-full flex flex-col px-6 lg:px-20 xl:px-32 py-10 pb-28 mt-20 min-h-[500px] place-content-center">{/* What founders say about us */}
      <h2 className="text-4xl font-bold mb-10">What founders say <span className="italic">about us</span></h2>
      <div className="w-full flex flex-row justify-between items-center overflow-hidden">
      <section className="testimonials w-full">
	<div className="w-full block">
  <div className="row">
        <div className="w-full">
          <div id="customers-testimonials" className="owl-carousel !block">
            <div className="item">
              <div className="shadow-effect">
                <img className="img-circle rounded-full" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non rhoncus dolor, ac dignissim nulla. In id eleifend metus, non varius ipsum. Aliquam efficitur ex et nisl eleifend venenatis in ut elit. Ut auctor ipsum ac orci mollis congue. Ut rutrum, lorem in eleifend tristique, quam ligula aliquam ex, iaculis hendrerit felis orci eget quam. Integer varius ligula risus. Integer aliquam vehicula diam a feugiat. Nulla turpis arcu, posuere sit amet viverra ac, dictum nec orci.</p>
              </div>
              <div className="testimonial-name">- Founder of Something</div>
            </div>
            <div className="item">
              <div className="shadow-effect">
                <img className="img-circle rounded-full" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non rhoncus dolor, ac dignissim nulla. In id eleifend metus, non varius ipsum. Aliquam efficitur ex et nisl eleifend venenatis in ut elit. Ut auctor ipsum ac orci mollis congue. Ut rutrum, lorem in eleifend tristique, quam ligula aliquam ex, iaculis hendrerit felis orci eget quam. Integer varius ligula risus. Integer aliquam vehicula diam a feugiat.</p>
              </div>
              <div className="testimonial-name">- Founder Name</div>
            </div>
            <div className="item">
              <div className="shadow-effect">
                <img className="img-circle rounded-full" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt=""/>
                <p>Maecenas ut enim ornare, iaculis sapien sed, faucibus odio. Fusce suscipit leo quis euismod faucibus. Nullam pretium dignissim quam ac ullamcorper. Integer et risus eu lacus dignissim ultricies. Maecenas luctus nisl leo, in blandit risus euismod sit amet. Nunc molestie fermentum lacus eu fringilla. Nulla mattis orci lorem, quis aliquam nunc eleifend in.</p>
              </div>
              <div className="testimonial-name">- Founder of Something</div>
            </div>
            <div className="item">
              <div className="shadow-effect">
                <img className="img-circle rounded-full" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt=""/>
                <p>Integer vulputate ante metus. Integer eu diam tortor. In pharetra sed nulla vel malesuada. Aliquam eu sodales lectus, ac tempor tellus. Praesent eu lorem mollis tortor aliquam laoreet. Ut fermentum est tristique diam semper maximus. Donec volutpat nulla ut ligula aliquet, feugiat tempus nulla porta.</p>
              </div>
              <div className="testimonial-name">- Founder Name</div>
            </div>
            <div className="item">
              <div className="shadow-effect">
                <img className="img-circle rounded-full" src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg" alt=""/>
                <p>Integer vulputate ante metus. Integer eu diam tortor. In pharetra sed nulla vel malesuada. Aliquam eu sodales lectus, ac tempor tellus. Praesent eu lorem mollis tortor aliquam laoreet.</p>
              </div>
              <div className="testimonial-name">- Founder of Something</div>
            </div>

</div>
        </div>
      </div>
</div>
    </section>
        </div>
      </section>
      <section className="bg-secondarylt flex flex-col lg:flex-row w-full py-6 shadow-inner shadow-gray-800"> {/* gain competitive advantage */ }
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <p className="flex font-medium m-6 lg:ml-32 text-white text-lg lg:text-xl">Gain a competitive edge in the market and unlock new, green possibilities for your business, via the Kyoto blockchain today.</p>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center">
      <a href="#" className="bg-accent w-auto inline-flex center text-black font-bold py-2 px-8 rounded-full uppercase text-sm md:text-base">Apply now</a>
      </div>
      </section>
      <section className="w-full flex flex-col px-6 lg:px-20 xl:px-32 pt-20 min-h-[500px]"> {/* our team of eco-warriors */}
      <h2 className="text-4xl font-bold mb-10">Our team <span className="italic">of Eco-Warriors</span></h2>
      <div className="flex w-full flex-row justify-between overflow-hidden">
        <div className="flex flex-row w-[49.5%] justify-between flex-wrap">
          <div className="w-[32%]">
            <Image src="https://placehold.co/400x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
          <div className="w-[32%]">
            <Image src="https://placehold.co/400x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
          <div className="w-[32%]">
            <Image src="https://placehold.co/400x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
          <div className="w-[32%] mt-6">
            <Image src="https://placehold.co/400x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
          <div className="w-[32%] mt-6">
            <Image src="https://placehold.co/400x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
          <div className="w-[32%]  mt-6">
            <Image src="https://placehold.co/400x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
        </div>
        {/* Second block of team members */}
        <div className="flex flex-row w-[49.5%] justify-between flex-wrap">
          <div className="w-[32%]">
            <Image src="https://placehold.co/400x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
          <div className="w-[32%]">
            <Image src="https://placehold.co/400x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
          <div className="w-[32%]">
            <Image src="https://placehold.co/400x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
          <div className="w-[32%] mt-6">
            <Image src="https://placehold.co/400x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
          <div className="w-[32%] mt-6">
            <Image src="https://placehold.co/400x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
          <div className="w-[32%]  mt-6">
            <Image src="https://placehold.co/400x400/png" height={300} width={300} className="self-center mb-2" alt="Team"></Image>
            <p className="text-xl font-medium">Firstname Surname</p>
            <p className="text-base">Founder and CEO</p>
          </div>
        </div>
      </div>
      </section>
      <section className="w-full flex flex-col px-6 lg:px-20 xl:px-32 pt-20"> {/* Curated thinking */}
      <h2 className="text-4xl font-bold mb-10">Curated <span className="italic">thinking</span></h2>
      <div className="flex flex-row w-full">
      <PastReportsGrants articles={articles} options/>
      </div>
      </section>
      <section className="w-full flex flex-col lg:flex-row px-6 lg:px-20 xl:px-32 py-10 mt-20 mb-20 bg-lightsuccess place-content-center shadow-inner-lg shadow-gray-300 border-b-[30px] border-secondarylt"> {/* Connect with a blockchain expert */}
      <div className="flex w-full mb-6 lg:w-1/2 flex-col">
      <h3 className="text-3xl font-bold mb-4">Connect with a blockchain expert</h3>
        <p className="mb-0 text-lg lg:text-xl">Book a 1-on-1 consultation to learn how you can use the world’s most advanced blockchain expertise, technology and ecosystem.</p>
        </div>
        <div className="flex w-full lg:w-1/2 items-center justify-center">
        <a href="#" className="bg-accent w-auto inline-flex center text-black font-bold py-2 px-8 rounded-full uppercase text-sm md:text-base">Let's talk</a>
        </div>
      </section>
      <Footer />
    </div>
</>
  )
  function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
  }) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={`arrow grants ${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }
}
