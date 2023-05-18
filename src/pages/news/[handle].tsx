// pages/news/[article].jsx
import {
    builder,
    BuilderComponent,
    BuilderContent,
    useIsPreviewing,
  } from "@builder.io/react";
  import Image from 'next/image'
  import Link from 'next/link'
  import React from 'react';
  import Head from "next/head";
  import Navbar from '../../../components/Navbar'
  import Footer from '../../../components/Footer'
  import DefaultErrorPage from "next/error";
  import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
  builder.init('05829d3eace9455893e1d144d2d4a91a');

  
function Article({ article, links, options }: {article:any, links: any, options: any}) {
    const isPreviewing = useIsPreviewing();
    if (!article && !isPreviewing) {
      return (
        <>
          <Head>
            <meta name="robots" content="noindex" />
          </Head>
          <DefaultErrorPage statusCode={404} />
        </>
      );
    }

    return (
      <BuilderContent
        content={article}
        options={{ includeRefs: true,}}
        model="article"
      >
        {(data, loading, fullContent) => (
          <React.Fragment>
            <Head>
              {/* Render meta tags from custom field */}
              <title>{data?.title}</title>
              <meta name="description" content={data?.blurb} />
              <meta name="og:image" content={data?.image} />
            </Head>
            <div id="pages">
            {!isPreviewing ? <Navbar links={links}/> : ''}
            </div>
            <div id="builder-comps" className="!max-w-[680px] px-3 md:px-0">
            <div className="flex justify-between py-2 pt-1 my-0 mb-10 border-b-2">
              <p  className="text-base text-primary font-semibold"><ChevronLeftOutlinedIcon className='pr-[3px] mb-[3px]'/><Link href="/news-home" className="hover:underline">BACK TO NEWS &amp; ARTICLES</Link></p>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-5xl  font-medium text-primary">{data?.title}</h1>
              <div className="flex justify-between py-2 pt-3 my-10 border-y-2">
              <p  className="text-base text-primary font-semibold"><CalendarMonthOutlinedIcon className='pr-[3px] mb-[3px]'/> {new Date(data?.date).toLocaleDateString('en-GB', options)}</p>
              <p className="text-base text-primary font-semibold"><WatchLaterOutlinedIcon  className='pr-[3px] mb-[3px]'/> {data?.mins} MIN READ</p>
              </div>
              <Image src={data?.image} width={680} height={500} alt={data?.title}/>
              { /* <p>{data?.blurb}</p> */}

              {/* Render the Builder drag/drop'd content */}
              <BuilderComponent
                name="article"
                content={fullContent}
                options={{ includeRefs: true }}
              />
            </div>
            <div className="article">
            <Footer />
            </div>
          </React.Fragment>
        )}
      </BuilderContent>
    );
  }
  
 export async function getStaticProps({ params }: {params: any}) {
  const links = await builder.get('nav-links', {
  }).promise();
  const article = await builder
    .get("article", {
      // Include references, like our `author` ref
      options: { includeRefs: true },
      query: {
        // Get the specific article by handle
        "data.handle": params.handle,
      },
    })
    .promise();

  return {
    props: {
      article,
      links: links || null,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
} 

export default Article