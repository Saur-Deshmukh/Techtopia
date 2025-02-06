import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import mountain3Img from "../assets/A.png";
import mountain2Img from "../assets/B.png";
import mountain1Img from "../assets/C.png";
import sunImg from "../assets/sun.svg";
import cloudsBottomImg from "../assets/clouds-bottom.svg";
import cloudsLeftImg from "../assets/clouds-left.svg";
import cloudsRightImg from "../assets/clouds-right.svg";
import starsImg from "../assets/stars.svg";

function ParallaxLanding() {

    const [background, setBackground] = useState(20)

    const parallaxRef = useRef(null);
    const mountain3 = useRef(null);
    const mountain2 = useRef(null);
    const mountain1 = useRef(null);
    const cloudsBottom = useRef(null);
    const cloudsLeft = useRef(null);
    const cloudsRight = useRef(null);
    const stars = useRef(null);
    const sun = useRef(null);
    const copy = useRef(null);
    const btn = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            var tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top top",
                    end: "2000 bottom",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100 + 20))
                    },
                },
            });
            tl.to(
                mountain3.current,
                {
                    y: "-=80",
                },
                0
            );
            tl.to(
                mountain2.current,
                {
                    y: "-=30",
                },
                0
            );
            tl.to(
                mountain1.current,
                {
                    y: "+=50",
                },
                0
            );
            tl.to(
                stars.current,
                {
                    top: 0,
                },
                0.5
            );
            tl.to(
                cloudsBottom.current,
                {
                    opacity: 0,
                    duration: 0.5
                },
                0
            );
            tl.to(
                cloudsLeft.current,
                {
                    x: "-20%",
                    opacity: 0,
                },
                0
            );
            tl.to(
                cloudsRight.current,
                {
                    x: "20%",
                    opacity: 0,
                },
                0
            );
            tl.to(
                sun.current,
                {
                    y: "+=510",
                },
                0
            );
            tl.to(
                copy.current,
                {
                    y: "-250%",
                    opacity: 1
                },
                0
            );
            tl.to(
                btn.current,
                {
                    opacity: 1,
                },
                1.5
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="parallax-outer">
            <div ref={parallaxRef} style={{ background: `linear-gradient(#0F2B9C, #673D7D ${background}%, #A74A67, #EDFC54 )` }} className='parallax'>
                <img ref={mountain3} className='mountain-3' src={mountain3Img} />
                <img ref={mountain2} className='mountain-2' src={mountain2Img} />
                <img ref={mountain1} className='mountain-1' src={mountain1Img} />
                <img ref={sun} className='sun' src={sunImg} />
                <img ref={cloudsBottom} className='clouds-bottom' src={cloudsBottomImg} />
                {/* <img ref={cloudsLeft} className='clouds-left' src={cloudsLeftImg} />
                <img ref={cloudsRight} className='clouds-right' src={cloudsRightImg} /> */}
                <img ref={stars} className='stars' src={starsImg} />

                <div ref={copy} className="copy flex items-center justify-center">
                <h1 className="bg-[radial-gradient(circle_at_top_left,_#ec4899,_#7e22ce,_#4338ca)] bg-clip-text text-transparent text-4xl font-extrabold tracking-wider 
drop-shadow-[0_0_10px_rgba(255,255,0,0.5)] mx-auto">
    TechTopia
</h1>

                </div>
            </div>
        </div>
    )
}

export default ParallaxLanding;