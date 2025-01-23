import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {

  const container = useRef();
  useGSAP(() => {
    gsap.to(".img", {
      scale: 1,
      x: 300,
      duration: 0.8,
      delay: 1.21,

      scrollTrigger: {
        trigger: ".img",
        // markers: true,
        start: "310% 20%",
        end: "400% 20%",
        scrub: 1,
      }
    })

  }, { scope: container });

  return (
    <main ref={container} className='w-[100vw] h-screen bg-white flex text-gray-800 relative'>
      <div className='w-[50vw] h-screen absolute top-0 left-0 z-50 bg-white flex flex-col items-center justify-between pl-12 pt-10 pr-16 pb-10'>
        <h1 className='font-[font1]'>Introduction</h1>
        <p className='text-4xl font-[font3] text-center w-[83%]'>Collaborating to create the surprising with innovation that inspires. Let’s work towards something bigger and brighter.
          <span className='text-xl mt-4 font-[font3]'>Focusing on <i className='underline'>Commercial</i> & <i className='underline'>Resort</i> Projects</span>
        </p>

        <h2 className='underline font-[font3] italic text-gray-700'>View Projects</h2>
      </div>

      <div className='w-[100vw] h-screen overflow-hidden'>
        <img className='img w-full h-full object-cover object-center scale-105' src="images/image5.webp" alt="" />
      </div>
    </main>
  )
}

export default Page3
