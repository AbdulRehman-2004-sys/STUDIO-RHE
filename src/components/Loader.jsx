import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Loader = () => {

  const container = useRef();
  useGSAP(() => {

    var tl = gsap.timeline();
    tl.to('.box1', { 
        y: "-100%",
        duration:1,
        delay:1,
    },"ab");
    tl.to('.box2', { 
        y: "-100%",
        duration:1,
        delay:1.1,
    },"ab");
    tl.to('.box3', { 
        y: "-100%",
        duration:1,
        delay:1.2,
    },"ab"); 
    tl.to('.box', {
      y: "-100%",
      duration: 3,
      delay: 1.3,
    }, "ab");
  }, { scope: container });
  return (
    <main ref={container} >
      <div className='flex box w-full fixed top-0 left-0 bg-transparent z-50'>
        <div className='box1 w-[33.3vw] h-screen bg-[#E96345]'></div>
        <div className='box2 w-[33.3vw] h-screen bg-[#E96345]'></div>
        <div className='box3 w-[33.4vw] h-screen bg-[#E96345]'></div>
      </div>
    </main>
  )
}

export default Loader
