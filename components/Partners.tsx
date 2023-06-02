import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from "react"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

function Partners() {
  const [currentkeenSlide, setCurrentkeenSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider(
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
      initial: -1,
      slideChanged(slider) {
        setCurrentkeenSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [
      (slider) => {
        let timeout: any;
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 1000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )


    return (
      <>
<div ref={sliderRef} className="keen-slider flex flex-row h-full" id="keen-slider">
        <div className='keen-slider__slide bg-lightgreen rounded-2xl my-5 border-4 border-lightgreen overflow-hidden relative'>
              <div className=' mx-4 '>
              <h2 className='text-primary text-lg uppercase font-bold mt-1 py-2 text-center'>Partner logo</h2>
              </div>
        </div>
        <div className='keen-slider__slide bg-lightgreen rounded-2xl my-5 border-4 border-lightgreen overflow-hidden relative'>
              <div className=' mx-4 '>
              <h2 className='text-primary text-lg uppercase font-bold mt-1 py-2 text-center'>Partner logo</h2>
              </div>
        </div>
        <div className='keen-slider__slide bg-lightgreen rounded-2xl my-5 border-4 border-lightgreen overflow-hidden relative'>
              <div className=' mx-4 '>
              <h2 className='text-primary text-lg uppercase font-bold mt-1 py-2 text-center'>Partner logo</h2>
              </div>
        </div>
        <div className='keen-slider__slide bg-lightgreen rounded-2xl my-5 border-4 border-lightgreen overflow-hidden relative'>
              <div className=' mx-4 '>
              <h2 className='text-primary text-lg uppercase font-bold mt-1 py-2 text-center'>Partner logo</h2>
              </div>
        </div>
        <div className='keen-slider__slide bg-lightgreen rounded-2xl my-5 border-4 border-lightgreen overflow-hidden relative'>
              <div className=' mx-4 '>
              <h2 className='text-primary text-lg uppercase font-bold mt-1 py-2 text-center'>Partner logo</h2>
              </div>
        </div>
        <div className='keen-slider__slide bg-lightgreen rounded-2xl my-5 border-4 border-lightgreen overflow-hidden relative'>
              <div className=' mx-4 '>
              <h2 className='text-primary text-lg uppercase font-bold mt-1 py-2 text-center'>Partner logo</h2>
              </div>
        </div>
        <div className='keen-slider__slide bg-lightgreen rounded-2xl my-5 border-4 border-lightgreen overflow-hidden relative'>
              <div className=' mx-4 '>
              <h2 className='text-primary text-lg uppercase font-bold mt-1 py-2 text-center'>Partner logo</h2>
              </div>
        </div>
      </div>
      {loaded && instanceRef.current &&
         (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentkeenSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
             disabled={
                currentkeenSlide ===
                instanceRef.current.track.details.slides.length - 1
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

export default Partners
