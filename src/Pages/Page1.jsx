import React, { useEffect } from 'react'
import "../index.css"
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Page1 = () => {

    const container = useRef();


    useGSAP(() => {
        const heading = document.querySelector(".heading");
        const headingText = heading.textContent;

        const characters = headingText.split("");
        heading.textContent = "";

        characters.forEach((char, i) => {
            const div = document.createElement("div");
            if (i == 7) {
                div.style.marginRight = "2rem"
            }
            div.style.transform = "translateY(10.5rem)"
            div.textContent = char;
            heading.appendChild(div);

        })

        var tl = gsap.timeline();
        tl.to(".heading div", {
            translateY: "0",
            duration: 0.3,
            delay: 1.21,
            stagger: 0.05,
        }, 'ab')
        tl.to(".para .lines h1", {
            top: 0,
            duration: 0.6,
            delay: 1.8,
        }, 'ab')


        var tl2 = gsap.timeline();
        tl2.to(".logo", {
            x: 100,
            duration: 3,

            scrollTrigger: {
                trigger: ".logo",
                // markers:true,
                start: "120% 20%",
                end: "120% 20%",
                scrub: 1,
            }
        })
        tl2.to(".logo", {
            opacity: 0,
            duration: 1,

            scrollTrigger: {
                trigger: ".logo",
                // markers:true,
                start: "120% 20%",
                end: "120% 20%",
                scrub: 1,
            }
        })

    }, { scope: container });

    return (
        <>
            <main ref={container} >
                <div className='w-[97vw] h-screen relative overflow-hidden'>
                    <div className='w-full h-full bg-gradient-to-t from-black/40 to-transparent absolute top-0 left-0'>
                        {/* <div className=''> */}
                        <img className='logo h-16 cursor-pointer fixed top-12 left-16 z-10' src="images/logo.png" alt="" />
                        {/* </div> */}
                        <div className='para w-[30%] h-[15vh] font-[font3] text-xl absolute right-12 top-12 text-white overflow-hidden z-10'>
                            <div className='lines h-[1.6rem]  overflow-hidden relative'>
                                <h1 className='absolute top-[100%] leading-2'>We are a London based architecture and</h1>
                            </div>
                            <div className='lines h-[1.6rem] overflow-hidden relative'>
                                <h1 className='absolute top-[100%] leading-2'>design studio with global reputation for</h1>
                            </div>
                            <div className='lines h-[1.6rem] overflow-hidden relative'>
                                <h1 className='absolute top-[100%] leading-2'>creating innovative spaces.</h1>
                            </div>
                        </div>

                        <div className='h-[37vh] w-full absolute bottom-4 left-20 z-10 pb-12 overflow-hidden'>
                            <h1 className='heading flex text-[10.5rem] font-[font3] z-50 text-white '>Building Beyond</h1>
                        </div>
                    </div>
                </div>


            </main>
        </>
    )
}

export default Page1
