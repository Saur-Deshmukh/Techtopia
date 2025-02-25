import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Clock, MapPin, ChevronDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import events from "../Data/eventsData";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const timelineRef = useRef([]);
  const lineRef = useRef(null);
  const [activeEvent, setActiveEvent] = useState(null);
  const [selectedDay, setSelectedDay] = useState("Day 1");

  

  const filteredEvents = events.filter(event => event.day === selectedDay);

  useEffect(() => {
    const animateTimeline = () => {
      gsap.fromTo(
        lineRef.current,
        { height: 0 },
        {
          height: "100%",
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1
          }
        }
      );

      timelineRef.current.forEach((el, index) => {
        gsap.fromTo(
          el,
          { 
            opacity: 0,
            x: index % 2 === 0 ? 50 : -50,
            y: 20
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    };

    // Reset animations when day changes
    const cleanup = gsap.context(() => {
      animateTimeline();
    });

    return () => cleanup.revert();
  }, [selectedDay]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 sm:py-20 px-4">
      <Card className="w-full max-w-6xl border-none bg-transparent shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
            Event Timeline
          </CardTitle>
          <CardDescription className="text-gray-400 text-base sm:text-lg mt-4">
            Two days of cutting-edge tech events
          </CardDescription>
          
          <div className="flex justify-center gap-2 sm:gap-4 mt-6 sm:mt-8">
            {["Day 1", "Day 2"].map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full transition-all duration-300 ${
                  selectedDay === day
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </CardHeader>

        <CardContent>
          <div className="relative timeline-container mt-10 sm:mt-16">
            <div
              ref={lineRef}
              className="absolute top-0 left-1/2 w-1 bg-gradient-to-b from-purple-500 to-pink-500 transform -translate-x-1/2 hidden sm:block"
            ></div>

            {filteredEvents.map((event, index) => (
              <div
                key={index}
                ref={(el) => (timelineRef.current[index] = el)}
                className="flex flex-col sm:flex-row items-center justify-center w-full mb-8 sm:mb-16 relative group"
                onMouseEnter={() => setActiveEvent(index)}
                onMouseLeave={() => setActiveEvent(null)}
                role="article"
                aria-label={`${event.title} event details`}
              >
                {/* Mobile Timeline Dot */}
                <div 
                  className={`sm:hidden w-6 h-6 mb-4 bg-gradient-to-r ${event.color} rounded-full self-center z-10 transition-transform duration-300 ${
                    activeEvent === index ? 'scale-125' : ''
                  }`}
                />

                {/* Desktop Timeline Dot */}
                <div 
                  className={`hidden sm:block absolute left-1/2 w-6 h-6 bg-gradient-to-r ${event.color} rounded-full transform -translate-x-1/2 z-10 transition-transform duration-300 ${
                    activeEvent === index ? 'scale-125' : ''
                  }`}
                >
                  <div className={`absolute w-4 h-4 bg-gray-800 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
                    activeEvent === index ? 'scale-0' : 'scale-1'
                  }`}></div>
                </div>

                <div
                  className={`w-full sm:w-5/12 rounded-xl bg-gray-800/70 backdrop-blur-sm shadow-xl border border-gray-700 transition-all duration-300 hover:border-purple-500 group-hover:transform group-hover:scale-105 ${
                    index % 2 !== 0 ? "sm:ml-auto" : "sm:mr-auto"
                  }`}
                >
                  <div className="relative p-4 sm:p-6">
                    <span className={`absolute -top-3 left-4 sm:left-6 inline-block bg-gradient-to-r ${event.color} text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium`}>
                      {event.category}
                    </span>

                    <div className="mt-4">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{event.title}</h3>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Clock size={14} className="text-purple-400" />
                          <span className="text-xs sm:text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} className="text-pink-400" />
                          <span className="text-xs sm:text-sm">{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Timeline;