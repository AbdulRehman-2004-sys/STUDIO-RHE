import React, { useEffect, useRef, useState } from 'react'
import "../index.css";
import Menu from './Menu';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {

  const [pop, setPop] = useState(false)
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const head1 = useRef(null);
  const head2 = useRef(null);
  const handleAnimation = () => {
    line1.current.classList.toggle("active1");
    line2.current.classList.toggle("active2");
    line3.current.classList.toggle("active3");
    setPop(!pop)
  }

  // *****************************
  const progressTextRef = useRef(null);
  useEffect(() => {
    const updateCounter = () => {
      // Calculate scroll position percentage
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      // Update the text using GSAP for smooth animation
      gsap.to(progressTextRef.current, {
        textContent: Math.round(scrollPercentage),
        duration: 0.2,
        snap: { textContent: 1 }, // Snap to whole numbers
        ease: "power1.out",
      });
    };
    // text transform
    var tl = gsap.timeline();
    tl.to(head1.current, {
      opacity: 0,
      duration: 0.2,
      color: "red",

      scrollTrigger: {
        trigger: head1.current,
        // markers:true,
        start: "154% 20%",
        end: "154% 20%",
        scrub: 1,
      }
    })
    tl.to(head2.current, {
      opacity: 1,
      duration: 0.3,

      scrollTrigger: {
        trigger: head2.current,
        // markers:true,
        start: "95% 20%",
        end: "95% 20%",
        scrub: 1,
      }
    })
    // Attach scroll event listener
    window.addEventListener("scroll", updateCounter);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", updateCounter);
    };

  }, []);
  return (
    <div className='w-full h-screen overflow-hidden'>
      <Menu pop={pop} setPop={setPop} />
      <div onClick={handleAnimation} className='w-full h-[0vh] lg:w-12 lg:h-screen bg-white fixed bottom-[-0.5rem] right-0 lg:top-0  z-[100] flex lg:flex-col justify-between items-center cursor-pointer pt-10 pb-8 border-t-2 lg:border-t-0 lg:border-l border-gray-400'>
        <div className='h-24 w-10 relative'>
          <h2 ref={head1} className='head1 transform lg:rotate-90 font-[font3] italic absolute  left-3 top-7 lg:top-4 lg:-left-2 md:text-xl lg:text-[1rem]'>Est.1997</h2>
          <h2 ref={head2} className='head2 transform lg:-rotate-90 italic whitespace-nowrap mt-8 absolute left-3  top-0 lg:-left-6 opacity-0 font-[font1] md:text-xl lg:text-[1rem]'>STUDIO RHE</h2>
        </div>
        <div className='flex gap-[0.2rem] pb-5 lg:pb-0'>
          <div ref={line1} className='h-8 border border-black transition-all duration-300'></div>
          <div ref={line2} className='h-8 border border-black transition-all duration-300'></div>
          <div ref={line3} className='h-8 border border-black transition-all duration-300'></div>
        </div>
        <div className='flex gap-0 justify-center flex-col pr-5 pb-6 lg:pb-0 lg:pr-0'>
          <h2 ref={progressTextRef} className='transform rotate-90 font-[font3] italic leading-2'>0</h2>
          <h2 className='transform rotate-90 font-[font3] italic'>%</h2>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
