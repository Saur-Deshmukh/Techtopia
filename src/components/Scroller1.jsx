import React from 'react';
import logo from '../assets/ieee.png'; // Adjust the import based on your file structure
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';

const Scroller = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".scroller-container",
                    pin: true,
                    start: "0%",
                    end: "+=300%",
                    scrub: 0.5,
                },
                defaults: {
                    ease: "none",
                }
            })
            .to(document.body, {
                delay: 0.2,
                background: "#050d19",
            },
                "start"
            ).to(".upper-container h1", {
                scale: 5,
            },
                "start"
            ).to(".upper-container h1", {
                opacity: 0,
            },
                "start"
            ).to(".upper-container", {
                opacity: 0,
            },
                "start"
            ).to("#ieee", {
                scale: 10,
                y: -2000,
                duration: 2
            }, "start").to(".cardImg", {
                delay: 0.1,
                scale: 3
            }, "start").to(".cardImg", {
                delay: 0.4,
                opacity: 1,
            }, "start").to(".scalableImg", {
                opacity: 0,
            }, "start");
    });

    return (
        <div className="scroller-container" style={{ height: '100vh' }}>
            {/* Upper Container */}
            <div className="fixed w-full h-screen flex flex-col justify-center items-center     upper-container">
                <h1 className="text-6xl md:text-8xl font-bold flex justify-center pt-20 md:pt-28 gradient-text" style={{ fontFamily: 'Michroma' }}>
                    {/* Individual letter spans for gradient effect */}
                    <span className="letter-gradient">TECHTOPIA</span>
                </h1>
            </div>

            {/* Image Board */}
            <div className="relative flex items-center justify-center h-screen overflow-hidden imageBoard">
                <img
                    id="ieee"
                    className="absolute w-[200px] h-[180px] md:w-[300px] md:h-[260px] z-10 top-16 flex justify-center scalableImg"
                    src={logo}
                    alt="IEEE Logo"
                />
                <div className="absolute flex items-center justify-center w-full h-full text-white  text-xl md:text-2xl opacity-0 scale-0 cardImg" style={{ fontFamily: 'Space Grotesk' }}>
                    <span className='letter-gradient'>innovate.inspire.create.</span>
                </div>
            </div>
        </div>
    );
};

export default Scroller;
