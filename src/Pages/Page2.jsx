import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {

  const container = useRef();

  useGSAP(() => {

    gsap.to(".image1", {
      scale: 1,
      duration: 1.5,
      ease: "power1.out",

      scrollTrigger: {
        trigger: ".image1",
        // markers: true,
        start: "330% 30%",
        end: "330% 30%",
      }
    })
    gsap.to(".image2", {
      scale: 1,
      duration: 1.5,
      ease: "power1.out",

      scrollTrigger: {
        trigger: ".image2",
        // markers: true,
        start: "250% 30%",
        end: "250% 30%",
      }
    })
    gsap.to(".image3", {
      scale: 1,
      duration: 1.5,
      ease: "power1.out",

      scrollTrigger: {
        trigger: ".image3",
        // markers: true,
        start: "300% 30%",
        end: "300% 30%",
      }
    })
    gsap.to(".image4", {
      scale: 1,
      duration: 1.5,
      ease: "power1.out",

      scrollTrigger: {
        trigger: ".image4",
        // markers: true,
        start: "330% 30%",
        end: "330% 30%",
      }
    })

  }, { scope: container });

  return (
    <main ref={container}>
      <div className='w-[150vw] h-screen bg-white flex text-gray-800'>
        <div className='w-[50vw] h-screen border-r border-gray-300 pl-12 pt-10 pr-16 pb-10'>
          <div className='flex justify-between'>
            <h1 className='font-[font1]'>Introduction</h1>
            <div className='w-[15vw] h-[45vh] overflow-hidden'>
              <img className='image1 w-full h-full object-cover object-center scale-125' src="images/image1.webp" alt="" />
            </div>
          </div>
          <div className='mt-20'>
            <h1 className='text-4xl text-gray-800 font-[font3] mb-7'>Established 1997</h1>
            <p className='mb-3 w-[82%] font-[font3] text-gray-700'>We are an architectural studio that believes in going further. Being bold. Exploring the new. Where the surprising delights the mind. Where people love to live, work and play. Let’s start building beyond.</p>
            <h1 className='underline font-[font3] italic text-gray-700 cursor-pointer'>Learn more about us</h1>
          </div>
        </div>

        <div className='w-[100vw] h-screen pl-16 pt-10 pr-16 pb-10 grid grid-cols-3 space-x-7 border-r border-gray-400'>
          <div className='h-[90%]'>
            <div className='w-full h-full overflow-hidden'>
              <img className='image2 object-cover object-center w-full h-full scale-125' src="images/image2.webp" alt="" />
            </div>
            <h2 className='mt-3 font-[font1]'>Zil Recidences</h2>
            <h2 className='underline font-[font3] italic text-gray-700'>View Projects</h2>
          </div>
          <div className='h-[90%]'>
            <div className='w-full h-full overflow-hidden'>
              <img className='image3 object-cover object-center w-full h-full scale-125' src="images/image3.jpg" alt="" />
            </div>

            <h2 className='mt-3 font-[font1]'>Zil Recidences</h2>
            <h2 className='underline font-[font3] italic text-gray-700'>View Projects</h2>
          </div>
          <div className='h-[90%]'>
            <div className='w-full h-full overflow-hidden'>
              <img className='image4 object-cover object-center w-full h-full scale-125' src="images/image4.jpg" alt="" />
            </div>
            <h2 className='mt-3 font-[font1]'>Zil Recidences</h2>
            <h2 className='underline font-[font3] italic text-gray-700'>View Projects</h2>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page2
