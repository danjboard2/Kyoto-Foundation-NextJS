import Link from 'next/link';
const options = { year: "numeric", month: 'long', day: 'numeric' };
function HeadlineCard({ articles, options }: {articles: any, options: any}) {
    return (
      
      <>
      <section className="flex justify-center">
      {articles.slice(-1).reverse().map((item: any) => (
        <Link key={item.data.date} href={`/news/${item.data.handle}`} className="w-full md:w-3/4 max-w-[500px] pb-4 mb-8 bg-lightgreen rounded-2xl my-5 border-4 border-lightgreen overflow-hidden relative">
              <img src={item.data.image}/>
              <div className=' border-b-2 border-primary mx-4 '>
              <h2 className='text-primary text-xl uppercase font-bold mt-1 py-2 text-left'>{item.data.title}</h2>
              </div>
              <div className='mx-4 pt-4'>
              <p className="text-base">{new Date(item.data.date).toLocaleDateString('en-GB', options)}</p>
              <p className="text-base">{item.data.mins} MIN READ</p>
              <p className='text-lg font-semibold pt-4 pb-4'>{item.data.blurb}</p>
              Read More 
              </div>
        </Link>
      ))}
      </section>
      </>
    );
  }
  export default HeadlineCard