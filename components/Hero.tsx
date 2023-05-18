import Link from 'next/link';
import Socials from '../components/Socials'
import HeadlineCard from '../components/HeadlineCard'
export default function Hero({articles} : {articles: any}) {

    return (
      <>
       <section className="flex w-full items-center md:items-start flex-col md:flex-row mb-16 items-stretch">
        <div className="flex items-center self-stretch md:items-start flex-col w-[90%] md:w-1/2 lg:pl-10 pb-10 md:border-r-2  pr-0 md:pr-5 lg:pr-10">
          <h1 className='bg-gradient-to-r from-[#E1F51F] to-[#A1D2B4] bg-clip-text font-bold text-transparent text-4xl sm:text-5xl lg:text-5xl xl:text-7xl'>NEWS AND<br/>ARTICLES</h1>
          <p className='text-center md:text-left lg:text-xl text-base uppercase w-9/12 py-5 text-white'>Stay up to date with kyoto protocol news from the latest headlines to previous reports.</p>
          <div className='flex flex-row gap-2 justify-start pb-5'>
          <a href="#" className="bg-accent text-black font-bold py-2 px-4 rounded-full uppercase text-sm md:text-base lg:text-lg">Buy Kyoto</a>
          <a href="#" className="bg-success  text-black font-bold py-2 px-4 rounded-full uppercase text-sm md:text-base lg:text-lg">Buy KSwap</a>
          </div>
          <Socials />
      </div>
      <div className="w-full md:w-1/2">
      <h2 className='text-2xl md:text-3xl xl:text-5xl font-bold text-accent uppercase text-center'>Latest Headline</h2>
      <HeadlineCard articles={articles} />
      </div>
      </section>
      </>
    );
  }
