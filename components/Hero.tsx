import Link from 'next/link';
import Socials from '../components/Socials'
import HeadlineCard from '../components/HeadlineCard'
export default function Hero({articles} : {articles: any}) {

    return (
      <>
       <section className="flex w- md:items-start flex-col md:flex-row mb-16 items-stretch">
        <div className="flex items-center self-stretch md:items-start flex-col w-full md:w-1/2 lg:pl-10 pb-10 md:border-r-2  pr-0 md:pr-5 lg:pr-10 justify-center">
          <h1 className='bg-gradient-to-r from-[#E1F51F] to-[#A1D2B4] bg-clip-text font-bold text-transparent text-4xl sm:text-5xl lg:text-5xl xl:text-7xl'>News and<br/>articles</h1>
          <p className='text-center md:text-left lg:text-xl text-base w-9/12 py-5 text-white'>Stay up to date with Kyoto news from the latest headlines to previous articles.</p>
          <div className='flex flex-row gap-2 justify-start pb-5'>
          </div>
         {/* <Socials /> */}
      </div>
      <div className="w-full md:w-1/2">
      <h2 className='text-2xl md:text-3xl xl:text-5xl font-bold text-accent uppercase text-center'>Latest Headline</h2>
      <HeadlineCard articles={articles} options />
      </div>
      </section>
      </>
    );
  }
