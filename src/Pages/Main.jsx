import React, { useState } from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Loader from '../components/Loader'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from '../components/Navbar'
// https://abdulrehman-2004-sys.github.io/STUDIO-RHE/
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)

const Main = () => {
    const container = useRef();
    const mm = gsap.matchMedia();

    const [screen, setScreen] = useState(window.innerWidth > 900);
    useGSAP(() => {

        mm.add("(min-width: 1114px)", () => {
            gsap.to(".pages", {
                // xPercent: -1500, // Move 4 pages horizontally (100% per page, 4 pages = 300%)
                translateX: "-378vw",
                duration: 30,
                ease: "power1.in", // Disable easing for smooth horizontal scrolling
                scrollTrigger: {
                    trigger: ".main", // Pin the parent container
                    // markers: true,
                    start: "10% 10%", // Start pinning when the parent hits the top of the viewport
                    end: "500% 10%", // End after scrolling through all 4 pages (4 * 100vh)
                    pin: true, // Pin the parent container
                    scrub: true, // Scrub the animation as you scroll
                    anticipatePin: 1, // Makes pinning smoother
                },
            });

            // bg
            gsap.to(".image", {
                scale: 1,
                duration: 1.5,
                ease: "power1.out",
                delay: 1.21,
            })
            gsap.to(".image", {
                x: 100,
                scale: 1.3,
                duration: 40,
                delay: 10,
                ease: "power1.out",

                scrollTrigger: {
                    trigger: ".image",
                    //   markers: true,
                    start: "35% 30%",
                    end: "200% 30%",
                    scrub: 1
                }
            })
        });

        mm.add("(max-width: 900px)", () => {
            gsap.to(".pages", {
                // xPercent: -1500, // Move 4 pages horizontally (100% per page, 4 pages = 300%)
                translateY: "-378vh",
                duration: 30,
                ease: "power1.in", // Disable easing for smooth horizontal scrolling
                scrollTrigger: {
                    trigger: ".main", // Pin the parent container
                    // markers: true,
                    start: "10% 10%", // Start pinning when the parent hits the top of the viewport
                    end: "200% 10%", // End after scrolling through all 4 pages (4 * 100vh)
                    pin: true, // Pin the parent container
                    scrub: true, // Scrub the animation as you scroll
                    anticipatePin: 1, // Makes pinning smoother
                },
            });

            // bg
            gsap.to(".image", {
                scale: 1,
                duration: 1.5,
                ease: "power1.out",
                delay: 1.21,
            })
        });


    }, { scope: container });

    return (
        <>
            <Loader />
            <main ref={container}>

                <div className='main h-[400vh] lg:h-screen w-full relative'>
                    <img className='image w-full h-screen object-cover object-center absolute top-0 left-0 scale-125 -z-50' src="images/Hero-Img.jpg" alt="" />
                    <div className='pages flex flex-col lg:flex-row h-[120vh] lg:h-screen absolute top-0 left-0 z-50'>
                        <Page1 />
                        <Page2 />
                        <Page3 />
                        <Page4 />
                    </div>
                    {screen && <Navbar />}
                </div>
                {
                    !screen && <Navbar />
                }
            </main>
        </>

    )
}

export default Main
