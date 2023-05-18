import Link from 'next/link';
import React, { useState } from "react"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
const options = { year: "numeric", month: 'long', day: 'numeric' };

function PastReports({ articles, options }: {articles: any, options: any}) {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints: {
        "(min-width: 800px)": {
          slides: { perView: 2, spacing: 40 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 40 },
        },
        "(min-width: 1200px)": {
          slides: { perView: 3, spacing: 80 },
        },
      },
      slides: {
        perView: 1,
        spacing: 20,
      },
      initial: -1,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [
      // add plugins here
    ]
  )


    return (
      <>
      <section className="flex flex-col w-full items-center justify-center border-2 rounded-xl overflow-hidden relative">
      <h2 className="bg-lightgreen w-full text-left overflow-hidden text-2xl uppercase font-bold pl-10 py-2">Past Reports</h2>
      { /* This needs to be a carousel - glidejs? */ } {/* We're hiding the first article here so we can display it on it's own at the top */}
      <div className='flex w-[80%] md:w-[90%] my-10'>
      <div ref={sliderRef} className="keen-slider flex flex-row h-full">
      {articles.slice(0, -1).reverse().map((item) => (
        <div key={item.data.date} className='keen-slider__slide pb-4 bg-lightgreen rounded-2xl my-5 border-4 border-lightgreen overflow-hidden relative'>
        <Link href={`/news/${item.data.handle}`} className="">
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
        </div>
      ))}
      </div>
         {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
             disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              } 
            />
          </>
        )}
      </div>

      </section>
      </>
    ); 
  }
  function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
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

export default PastReports
