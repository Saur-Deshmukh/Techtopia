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

  const events = [
    {
      year: "2020",
      title: "Started College",
      description: "Began my journey in Computer Engineering.",
    },
    {
      year: "2021",
      title: "First Hackathon",
      description: "Participated in my first coding competition.",
    },
    {
      year: "2022",
      title: "Internship",
      description: "Worked as a developer intern at XYZ company.",
    },
    {
      year: "2023",
      title: "Major Project",
      description: "Built a full-stack application using MERN stack.",
    },
    {
      year: "2024",
      title: "Graduation",
      description: "Successfully graduated and started working in tech.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 py-20 relative">
      <h2 className="text-4xl font-bold text-white mb-10">Timeline</h2>

      {/* Timeline Container */}
      <div className="relative w-full max-w-4xl timeline-container">
        {/* Moving Line */}
        <div
          ref={lineRef}
          className="absolute top-0 left-1/2 w-1 bg-gradient-to-b from-purple-500 to-pink-500 timeline-line transform -translate-x-1/2"
        ></div>

        {events.map((event, index) => (
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
                {event.year}
              </span>

              {/* Card Content */}
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-300">{event.description}</p>

              {/* Hover Popup */}
              {/* {hoverIndex === index && ( */}
              {/* <div className="absolute bottom-full mb-2 p-3 bg-gray-700 text-white rounded-lg text-sm shadow-md opacity-90"> */}
              {/* More details about {event.title}... */}
              {/* </div> */}
              {/* )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
