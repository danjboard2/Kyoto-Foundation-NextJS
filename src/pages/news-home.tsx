import Image from 'next/image'
import Link from 'next/link';
import Script from 'next/script'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import PastReports from '../../components/PastReports'
import { BuilderComponent, builder, useIsPreviewing, Builder } from '@builder.io/react';
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

export default function Home({links, articles}: {links: any, articles: any}) {
  
  return (
    <>
    <div id="foundation" className=" bg-gradient-radial from-[#14534E] to-[#032321]">
    <div id="pages">
      <Navbar links={links} className/>
      </div>
      <div id="builder-comps" className="!bg-transparent !mt-10 w-[90%]"> {/* This is to set the VH to a min of 100% */}
      <Hero articles={articles}/>
      <PastReports articles={articles} options/>
      </div>
      <div className="article">
            <Footer />
            </div>
      </div>
    </>
  );
}