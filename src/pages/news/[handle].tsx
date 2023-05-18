// pages/news/[article].jsx
import {
    builder,
    BuilderComponent,
    BuilderContent,
    useIsPreviewing,
  } from "@builder.io/react";
  import Image from 'next/image'
  import React from 'react';
  import Head from "next/head";
  import Navbar from '../../../components/Navbar'
  import Footer from '../../../components/Footer'
  import DefaultErrorPage from "next/error";
  builder.init('05829d3eace9455893e1d144d2d4a91a');

  
function Article({ article, links }: {article:any, links: any}) {
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
            <div id="builder-comps">
              <h1 className="text-5xl">{data?.title}</h1>
              <p>{data?.blurb}</p>
              <Image src={data?.image} width={500} height={500} alt={data?.title}/>
              <p>{data?.date}</p>

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