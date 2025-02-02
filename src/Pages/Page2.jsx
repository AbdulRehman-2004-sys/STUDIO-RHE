import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {

  const container = useRef();
  const mm = gsap.matchMedia();

  useGSAP(() => {

    mm.add("(min-width: 1114px)", () => {
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
    });

    mm.add("(max-width: 900px)", () => {
      gsap.to(".image1", {
        scale: 1,
        duration: 1.5,
        ease: "power1.out",

        scrollTrigger: {
          trigger: ".image1",
          // markers: true,
          start: "200% 30%",
          end: "200% 30%",
        }
      })
      gsap.to(".image2", {
        scale: 1,
        duration: 1.5,
        ease: "power1.out",

        scrollTrigger: {
          trigger: ".image2",
          // markers: true,
          start: "400% 30%",
          end: "400% 30%",
        }
      })
      gsap.to(".image3", {
        scale: 1,
        duration: 1.5,
        ease: "power1.out",

        scrollTrigger: {
          trigger: ".image3",
          // markers: true,
          start: "500% 30%",
          end: "500% 30%",
        }
      })
      gsap.to(".image4", {
        scale: 1,
        duration: 1.5,
        ease: "power1.out",

        scrollTrigger: {
          trigger: ".image4",
          // markers: true,
          start: "500% 30%",
          end: "500% 30%",
        }
      })
    });

  }, { scope: container });

  return (
    <main ref={container}>
      <div className='w-full lg:w-[150vw] min-h-[100vh] lg:h-screen bg-white flex flex-col lg:flex-row text-gray-800'>
        <div className='w-[100vw] lg:w-[50vw] min-h-[100vh] lg:h-screen border-r border-gray-300 pl-5 pr-5 lg:pl-12 pt-10 lg:pr-16 pb-10'>
          <div className='w-[90vw] lg:w-full flex justify-between '>
            <h1 className='font-[font1] md:text-xl lg:text-[1rem]'>Introduction</h1>
            <div className='w-[53vw] h-[40vh] md:w-[53vw] md:h-[50vh] lg:w-[15vw] lg:h-[45vh] overflow-hidden'>
              <img className='image1 w-full h-full object-cover object-center scale-125' src="images/image1.webp" alt="" />
            </div>
          </div>
          <div className='w-[90vw] mt-24 lg:mt-20 '>
            <h1 className='text-4xl text-gray-800 font-[font3] mb-7'>Established 1997</h1>
            <p className='mb-3 w-[100%] lg:w-[42%] font-[font3] text-gray-700 md:text-2xl lg:text-[1rem]'>We are an architectural studio that believes in going further. Being bold. Exploring the new. Where the surprising delights the mind. Where people love to live, work and play. Let’s start building beyond.</p>
            <h1 className='underline font-[font3] italic text-gray-700 cursor-pointer md:text-xl lg:text-[1rem]'>Learn more about us</h1>
          </div>
        </div>

        <div className='w-[100vw] min-h-[240vh] lg:h-screen pl-5 lg:pl-16 pt-10 pr-5 lg:pr-16 pb-10 grid grid-cols-1 lg:grid-cols-3 space-y-0 lg:space-x-7 border-b border-gray-400 lg:border-r lg:border-gray-400'>
          <div className='h-[60vh] lg:h-[75vh]'>
            <div className='w-full h-full overflow-hidden'>
              <img className='image2 object-cover object-center w-full h-full scale-125' src="images/image2.webp" alt="" />
            </div>
            <h2 className='mt-3 font-[font1]  md:text-xl lg:text-[1rem]'>Zil Recidences</h2>
            <h2 className='underline font-[font3] italic text-gray-700'>View Projects</h2>
          </div>
          <div className='h-[60vh] lg:h-[75vh]'>
            <div className='w-full h-full overflow-hidden'>
              <img className='image3 object-cover object-center w-full h-full scale-125' src="images/image3.jpg" alt="" />
            </div>

            <h2 className='mt-3 font-[font1] md:text-xl lg:text-[1rem]'>Zil Recidences</h2>
            <h2 className='underline font-[font3] italic text-gray-700'>View Projects</h2>
          </div>
          <div className='h-[60vh] lg:h-[75vh]'>
            <div className='w-full h-full overflow-hidden'>
              <img className='image4 object-cover object-center w-full h-full scale-125' src="images/image4.jpg" alt="" />
            </div>
            <h2 className='mt-3 font-[font1] md:text-xl lg:text-[1rem]'>Zil Recidences</h2>
            <h2 className='underline font-[font3] italic text-gray-700'>View Projects</h2>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page2
