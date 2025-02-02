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

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const timelineRef = useRef([]);
  const lineRef = useRef(null);
  const [activeEvent, setActiveEvent] = useState(null);
  const [selectedDay, setSelectedDay] = useState("Day 1");

  const events = [
    {
      day: "Day 1",
      time: "09:30 AM - 12:00 PM",
      title: "Blockchain Hackathon Presentation",
      description: "Join us for an exciting blockchain hackathon where teams will present innovative solutions.",
      location: "Main Hall",
      category: "Hackathon",
      color: "from-blue-500 to-cyan-500"
    },
    {
      day: "Day 1",
      time: "01:00 PM - 06:00 PM",
      title: "GPT Hackathon",
      description: "Explore the possibilities of GPT technology in this intensive coding session.",
      location: "Tech Lab A",
      category: "Hackathon",
      color: "from-purple-500 to-pink-500"
    },
    {
      day: "Day 1",
      time: "01:00 PM - 06:00 PM",
      title: "IOT Warzone",
      description: "Compete in IoT challenges and showcase your hardware hacking skills.",
      location: "Innovation Hub",
      category: "Competition",
      color: "from-orange-500 to-red-500"
    },
    {
      day: "Day 2",
      time: "09:30 AM - 12:00 PM",
      title: "Auto Expo",
      description: "Experience the future of autonomous vehicles and smart transportation.",
      location: "Exhibition Center",
      category: "Exhibition",
      color: "from-green-500 to-emerald-500"
    },
    {
      day: "Day 2",
      time: "01:00 PM - 05:00 PM",
      title: "Bug Bounty",
      description: "Hunt for vulnerabilities and win prizes in this security challenge.",
      location: "Security Zone",
      category: "Competition",
      color: "from-yellow-500 to-orange-500"
    }
  ];

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
    <div className="flex flex-col items-center justify-center min-h-screen py-20">
      <Card className="w-full max-w-5xl border-none">
        <CardHeader className="text-center">
          <CardTitle className="text-6xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
            Event Timeline
          </CardTitle>
          <CardDescription className="text-gray-400 text-lg mt-4">
            Join us for two days of exciting tech events
          </CardDescription>
          
          <div className="flex justify-center gap-4 mt-8">
            {["Day 1", "Day 2"].map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
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
          <div className="relative timeline-container px-4 mt-16">
            <div
              ref={lineRef}
              className="absolute top-0 left-1/2 w-1 bg-gradient-to-b from-purple-500 to-pink-500 transform -translate-x-1/2"
            ></div>

            {filteredEvents.map((event, index) => (
              <div
                key={index}
                ref={(el) => (timelineRef.current[index] = el)}
                className={`flex items-center justify-${index % 2 === 0 ? "start" : "end"} w-full mb-16 relative group`}
                onMouseEnter={() => setActiveEvent(index)}
                onMouseLeave={() => setActiveEvent(null)}
                role="article"
                aria-label={`${event.title} event details`}
              >
                <div 
                  className={`absolute left-1/2 w-6 h-6 bg-gradient-to-r ${event.color} rounded-full transform -translate-x-1/2 z-10 transition-transform duration-300 ${
                    activeEvent === index ? 'scale-125' : ''
                  }`}
                >
                  <div className={`absolute w-4 h-4 bg-gray-800 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
                    activeEvent === index ? 'scale-0' : 'scale-1'
                  }`}></div>
                </div>

                <div
                  className={`w-5/12 rounded-xl ${
                    index % 2 === 0 ? "ml-auto" : "mr-auto"
                  } bg-gray-800/50 backdrop-blur-sm shadow-xl border border-gray-700 transition-all duration-300 hover:border-purple-500 group-hover:transform group-hover:scale-105`}
                >
                  <div className="relative p-6">
                    <span className={`absolute -top-3 left-6 inline-block bg-gradient-to-r ${event.color} text-white px-4 py-1 rounded-full text-sm font-medium`}>
                      {event.category}
                    </span>

                    <div className="mt-4">
                      <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                      <p className="text-gray-400 mb-4">{event.description}</p>
                      
                      <div className="flex items-center gap-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-purple-400" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-pink-400" />
                          <span className="text-sm">{event.location}</span>
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