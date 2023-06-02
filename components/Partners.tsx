import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from "react"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

function Partners() {
  const [currentkeenSlide2, setCurrentkeenSlide2] = React.useState(0)
  const [loaded2, setLoaded2] = useState(false)
  const [sliderRef2, instanceRef2] = useKeenSlider(
      {
      breakpoints: {
        "(min-width: 800px)": {
          slides: { perView: 2, spacing: 40 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 40 },
        },
        "(min-width: 1200px)": {
          slides: { perView: 5, spacing: 80 },
        },
      },
      slides: {
        perView: 1,
        spacing: 20,
      },
      loop: true,
      selector: '.keen-slider__slide2',
      initial: -1,
      slideChanged(slider2) {
        setCurrentkeenSlide2(slider2.track.details.rel)
      },
      created() {
        setLoaded2(true)
      },
    },
    [
      (slider2) => {
        let timeout2: any;
        let mouseOver2 = false
        function clearNextTimeout() {
          clearTimeout(timeout2)
        }
        function nextTimeout() {
          clearTimeout(timeout2)
          if (mouseOver2) return
          timeout2 = setTimeout(() => {
            slider2.next()
          }, 1000)
        }
        slider2.on("created", () => {
          slider2.container.addEventListener("mouseover", () => {
            mouseOver2 = true
            clearNextTimeout()
          })
          slider2.container.addEventListener("mouseout", () => {
            mouseOver2 = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider2.on("dragStarted", clearNextTimeout)
        slider2.on("animationEnded", nextTimeout)
        slider2.on("updated", nextTimeout)
      },
    ]
  )


    return (
      <>
<div ref={sliderRef2} className="keen-slider2 flex flex-row h-full" id="keen-slider2">
        <div className='keen-slider__slide2 bg-lightgreen rounded-2xl my-5 border-4 border-lightgreen overflow-hidden relative'>
              <div className=' mx-4 '>
              <h2 className='text-primary text-lg uppercase font-bold mt-1 py-2 text-center'>Partner logo</h2>
              </div>
        </div>
        <div className='keen-slider__slide2 bg-lightgreen rounded-2xl my-5 border-4 border-lightgreen overflow-hidden relative'>
              <div className=' mx-4 '>
              <h2 className='text-primary text-lg uppercase font-bold mt-1 py-2 text-center'>Partner logo</h2>
              </div>
        </div>
        <div className='keen-slider__slide2 bg-lightgreen rounded-2xl my-5 border-4 border-lightgreen overflow-hidden relative'>
              <div className=' mx-4 '>
              <h2 className='text-primary text-lg uppercase font-bold mt-1 py-2 text-center'>Partner logo</h2>
              </div>
        </div>
        <div className='keen-slider__slide2 bg-lightgreen rounded-2xl my-5 border-4 border-lightgreen overflow-hidden relative'>
              <div className=' mx-4 '>
              <h2 className='text-primary text-lg uppercase font-bold mt-1 py-2 text-center'>Partner logo</h2>
              </div>
        </div>
        <div className='keen-slider__slide2 bg-lightgreen rounded-2xl my-5 border-4 border-lightgreen overflow-hidden relative'>
              <div className=' mx-4 '>
              <h2 className='text-primary text-lg uppercase font-bold mt-1 py-2 text-center'>Partner logo</h2>
              </div>
        </div>
        <div className='keen-slider__slide2 bg-lightgreen rounded-2xl my-5 border-4 border-lightgreen overflow-hidden relative'>
              <div className=' mx-4 '>
              <h2 className='text-primary text-lg uppercase font-bold mt-1 py-2 text-center'>Partner logo</h2>
              </div>
        </div>
        <div className='keen-slider__slide2 bg-lightgreen rounded-2xl my-5 border-4 border-lightgreen overflow-hidden relative'>
              <div className=' mx-4 '>
              <h2 className='text-primary text-lg uppercase font-bold mt-1 py-2 text-center'>Partner logo</h2>
              </div>
        </div>
      </div>
      {loaded2 && instanceRef2.current &&
         (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef2.current?.prev()
              }
              disabled={currentkeenSlide2 === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef2.current?.next()
              }
             disabled={
                currentkeenSlide2 ===
                instanceRef2.current.track.details.slides.length - 1
              } 
            />
          </>
        )
            }
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

export default Partners
