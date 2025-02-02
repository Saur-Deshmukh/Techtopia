import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const timelineRef = useRef([]);
  const lineRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    gsap.fromTo(
      lineRef.current,
      { height: 0 },
      {
        height: "100%",
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 80%",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    timelineRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const eventsDay1 = [
    {
      time: "Day 1: 09:30 AM - 12:00PM",
      title: "Blockchain Hackathon Presentation",
      
    },
    {
      time: "Day 1: 01:00 PM - 06:00PM",
      title: "GPT Hackathon",
      
    },
    {
      time: "Day 1: 01:00 PM - 06:00PM",
      title: "IOT Warzone",
      
    },
    {
      time: "Day 2: 09:30 AM - 12:00PM",
      title: "Auto Expo",
      
    },
    {
      time: "Day 2: 01:00 PM - 05:00PM",
      title: "Bug Bounty",
      
    },
  ];
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 relative">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
          Timeline
        </h1>
      </div>
      {/* Timeline Container */}
      <div className="relative w-full max-w-4xl timeline-container">
        {/* Moving Line */}
        <div
          ref={lineRef}
          className="absolute top-0 left-1/2 w-1 bg-gradient-to-b from-purple-500 to-pink-500 timeline-line transform -translate-x-1/2"
        ></div>

        {eventsDay1.map((event, index) => (
          <div
            key={index}
            ref={(el) => (timelineRef.current[index] = el)}
            className={`flex items-center justify-${
              index % 2 === 0 ? "start" : "end"
            } w-full mb-10 relative`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 w-5 h-5 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full transform -translate-x-1/2"></div>

            {/* Card */}
            <div
              className={`relative w-1/2 p-5 rounded-lg shadow-lg bg-gray-800 text-white transition-transform transform hover:scale-105 border-2 border-transparent hover:border-purple-500 animate-glow ${
                index % 2 === 0 ? "ml-auto" : "mr-auto"
              }`}
            >
              {/* Year Tag */}
              <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm">
                {event.time}
              </span>

              {/* Card Content */}
              <h3 className="text-xl font-semibold text-center">{event.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Timeline;
