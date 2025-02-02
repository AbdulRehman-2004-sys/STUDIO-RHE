import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {

  const container = useRef();
  const mm = gsap.matchMedia();

  useGSAP(() => {

    mm.add("(min-width: 1114px)", () => {
      const head = document.querySelector(".head");
      const headText = head.textContent;

      const characters = headText.split("");
      head.textContent = "";

      characters.forEach((char, i) => {
        const div = document.createElement("div");
        div.style.transform = "translateY(-11rem)"
        div.textContent = char;
        head.appendChild(div);
      })
      // console.log(heading)
      gsap.to(".head div", {
        translateY: "0",
        duration: 0.8,
        delay: 1.21,
        stagger: 0.05,

        scrollTrigger: {
          trigger: ".head",
          // markers:true,
          start: "930% 20%",
          end: "930% 20%",
          // scrub:1,
        }
      })

      gsap.to(".image1", {
        scale: 1,
        duration: 1.5,
        ease: "power1.out",

        scrollTrigger: {
          trigger: ".image1",
          // markers: true,
          start: "500% 30%",
          end: "500% 30%",
        }
      })
      gsap.to(".image2", {
        scale: 1,
        duration: 1.5,
        ease: "power1.out",

        scrollTrigger: {
          trigger: ".image2",
          // markers: true,
          start: "1230% 30%",
          end: "1230% 30%",
        }
      })
      gsap.to(".image3", {
        scale: 1,
        duration: 1.5,
        ease: "power1.out",

        scrollTrigger: {
          trigger: ".image3",
          // markers: true,
          start: "1100% 10%",
          end: "1100% 10%",
        }
      })
    });

    mm.add("(max-width: 900px)", () => {
      const head = document.querySelector(".head");
      const headText = head.textContent;

      const characters = headText.split("");
      head.textContent = "";

      characters.forEach((char, i) => {
        const div = document.createElement("div");
        div.style.transform = "translateY(-9rem)"
        div.textContent = char;
        head.appendChild(div);
      })
      // console.log(heading)
      gsap.to(".head div", {
        translateY: "0",
        duration: 0.8,
        // delay: 1.21,
        stagger: 0.05,

        scrollTrigger: {
          trigger: ".head div",
          // markers:true,
          start: "1600% 20%",
          end: "1600% 20%",
          // scrub:1,
        }
      })

      gsap.to(".image1", {
        scale: 1,
        duration: 1.5,
        ease: "power1.out",

        scrollTrigger: {
          trigger: ".image1",
          // markers: true,
          start: "500% 30%",
          end: "500% 30%",
        }
      })
      gsap.to(".image2", {
        scale: 1,
        duration: 1.5,
        ease: "power1.out",

        scrollTrigger: {
          trigger: ".image2",
          // markers: true,
          start: "1100% 50%",
          end: "1100% 50%",
        }
      })
      gsap.to(".image3", {
        scale: 1,
        duration: 1.5,
        ease: "power1.out",

        scrollTrigger: {
          trigger: ".image3",
          // markers: true,
          start: "1000% 50%",
          end: "1000% 50%",
        }
      })
    });

  }, { scope: container });

  return (
    <main ref={container} className='w-full lg:w-[130vw] h-auto lg:h-screen bg-white flex flex-col lg:flex-row text-gray-800 '>
      <div className='w-full lg:w-[50vw] h-[100vh] lg:h-screen bg-[#E96345] text-white flex flex-col justify-between pl-5 pr-5 pt-16 lg:pl-16 lg:pt-10  lg:pr-16'>
        <div className='text-[1.8rem] lg:text-[2.1rem] font-[font3] text-white leading-9'>In tune with London's fast changing markets, Studio RHE combine commercial know how with <br /> creative originality.
          <h2 className='underline font-[font3] italic text-[1rem] mt-5 cursor-pointer'>Learn More About Us</h2>
        </div>
        <h1 className='head font-[font3] text-[6rem] md:text-[8rem] lg:text-[10rem] flex overflow-hidden'>Journal</h1>
      </div>

      <div className='w-full lg:w-[80vw] h-[200vh] pl-5 pr-5 lg:pl-16 pt-10 lg:pr-16 pb-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-8'>
        <div className='h-[70vh] lg:h-[78vh]'>
          <div className='w-full lg:w-full h-full overflow-hidden'>
            <img className='image1 object-cover object-center w-full h-full scale-125' src="images/image6.jpg" alt="" />
          </div>
          <h2 className='mt-3 font-[font1] md:text-xl lg:text-[1rem]'>Zil Recidences</h2>
          <h2 className='underline font-[font3] italic text-gray-700'>View Projects</h2>
        </div>
        <div className='h-[70vh] lg:h-[78vh] grid grid-rows-2 gap-20'>
          <div>

            <div className='w-full lg:w-full h-full overflow-hidden'>
              <img className='image2 object-cover object-center w-full h-full scale-125' src="images/image7.webp" alt="" />
            </div>

            <h2 className='mt-3 font-[font1] md:text-xl lg:text-[1rem]'>Zil Recidences</h2>
            <h2 className='underline font-[font3] italic text-gray-700'>View Projects</h2>
          </div>
          <div>

            <div className='w-full lg:w-full h-full overflow-hidden'>
              <img className='image3 object-cover object-center w-full h-full scale-125' src="images/image8.webp" alt="" />
            </div>

            <h2 className='mt-3 font-[font1] md:text-xl lg:text-[1rem]'>Zil Recidences</h2>
            <h2 className='underline font-[font3] italic text-gray-700'>View Projects</h2>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page4
