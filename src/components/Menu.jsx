import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Menu = ({ pop, setPop }) => {


    const main_out = useRef(null);
    const main1 = useRef(null);
    const main2 = useRef(null);
    const main3 = useRef(null);
    const main4 = useRef(null);

    // useGSAP(() => {
    // console.log(pop)
    // const handleMenu=()=>
    // {
    //     setPop(!pop)
    // }
    useEffect(() => {
        if (pop === true) {

            var tl = gsap.timeline();
            tl.to(main_out.current, {
                width: "100%",
                height: "100vh",
                duration: 0.4,
                delay: 0.5,
            }, "ab");
            tl.to(main1.current, {
                width: "80vw",
                height: "100vh",
                duration: 0.6,
                delay: 0.6,
            }, "ab");
            tl.to(main2.current, {
                width: "60vw",
                height: "75vh",
                duration: 0.6,
                delay: 0.7,
            }, "ab");
            tl.to(main3.current, {
                width: "40vw",
                height: "50vh",
                duration: 0.6,
                delay: 0.8,
            }, "ab");
            tl.to(main4.current, {
                width: "20vw",
                height: "25vh",
                duration: 0.6,
                delay: 0.9,
            }, "ab");
        }

        if (pop === false) {

            var tl2 = gsap.timeline();
            tl2.to(main_out.current, {
                width: "0%",
                height: "0vh",
                duration: 0.4,
                delay: 0.9,
            }, "ab2");
            tl2.to(main1.current, {
                width: "0vw",
                height: "0vh",
                duration: 0.4,
                delay: 0.8,
            }, "ab2");
            tl2.to(main2.current, {
                width: "0vw",
                height: "0vh",
                duration: 0.4,
                delay: 0.7,
            }, "ab2");
            tl2.to(main3.current, {
                width: "0vw",
                height: "0vh",
                duration: 0.4,
                delay: 0.6,
            }, "ab2");
            tl2.to(main4.current, {
                width: "0vw",
                height: "0vh",
                duration: 0.4,
                delay: 0.5,
            }, "ab2");
        }
    })
    // *******************************************


    // }, { scope: container });
    // useEffect(()=>
    // {
    // if(pop)
    // {
    //     var tl2 = gsap.timeline();
    //      tl2.to('.main_out', {
    //             width: "0%",
    //             height: "0vh",
    //             duration: 0.9,
    //             delay: 0.8,
    //         }, "ab2");
    //         tl2.to('.main1', {
    //             width: "80vw",
    //             height: "100vh",
    //             duration: 0.9,
    //             delay: 0.9,
    //         }, "ab2");
    //         tl2.to('.main2', {
    //             width: "60vw",
    //             height: "75vh",
    //             duration: 0.9,
    //             delay: 0.7,
    //         }, "ab2");
    //         tl2.to('.main3', {
    //             width: "0vw",
    //             height: "0vh",
    //             duration: 0.9,
    //             delay: 0.6,
    //         }, "ab2");
    //         tl2.to('.main4', {
    //             width: "0vw",
    //             height: "0vh",
    //             duration: 0.4,
    //             delay: 0.5,
    //         }, "ab2");
    // }
    // },[pop])
    return (
        <main>
            <div ref={main_out} className='main_out w-0 h-0  bg-[rgba(0,0,0,0.3)] absolute right-0 top-0 z-50 overflow-hidden'>
                <div className='absolute right-0 top-0'>
                    <div ref={main1} className='main1 hover:bg-[#e96345] hover:text-white cursor-pointer hover:transition-all hover:duration-300 w-0 h-0 bg-white pl-8 absolute right-0 top-0'>
                        <div className='absolute bottom-8 flex justify-between items-center w-[80%]'>
                            <h1 className='text-4xl font-[font3]'>Contact</h1>
                            <div className='flex gap-4'>
                                <h1 className='text-xl font-[font3] underline'>Privacy Policy</h1>
                                <h1 className='text-xl font-[font3] underline'>Site By ThunderClap</h1>
                            </div>
                        </div>
                    </div>
                    <div ref={main2} className='main2 hover:bg-[#e96345] hover:text-white cursor-pointer hover:transition-all hover:duration-300 w-0 h-0 bg-white pl-8 absolute right-0 top-0 border-b  border-l border-gray-400'>
                        <h1 className='text-4xl font-[font3] absolute bottom-8'>Journal</h1>
                    </div>
                    <div ref={main3} className='main3 hover:bg-[#e96345] hover:text-white cursor-pointer hover:transition-all hover:duration-300 w-0 h-0 bg-white pl-8 absolute right-0 top-0 border-b  border-l border-gray-400'>
                        <h1 className='text-4xl font-[font3] absolute bottom-8'>Projects</h1>
                    </div>
                    <div ref={main4} className='main4 hover:bg-[#e96345] hover:text-white cursor-pointer hover:transition-all hover:duration-300 w-0 h-0 bg-white pl-8 absolute right-0 top-0 border-b  border-l border-gray-400'>
                        <h1 className='text-4xl font-[font3] absolute bottom-8'>About</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Menu
