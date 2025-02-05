import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const timelineRef = useRef([]);
  const lineRef = useRef(null);
  const [activeEvent, setActiveEvent] = useState(null);

  const events = [
    {
      time: "09:30 AM - 12:00 PM",
      title: "Blockchain Hackathon Presentation",
      description: "Join us for an exciting blockchain hackathon where teams will present innovative solutions.",
      location: "Main Hall",
      category: "Hackathon",
      color: "from-blue-500 to-cyan-500",
    },
    {
      time: "01:00 PM - 06:00 PM",
      title: "GPT Hackathon",
      description: "Explore the possibilities of GPT technology in this intensive coding session.",
      location: "Tech Lab A",
      category: "Hackathon",
      color: "from-purple-500 to-pink-500",
    },
    {
      time: "01:00 PM - 06:00 PM",
      title: "IOT Warzone",
      description: "Compete in IoT challenges and showcase your hardware hacking skills.",
      location: "Innovation Hub",
      category: "Competition",
      color: "from-orange-500 to-red-500",
    },
    {
      time: "09:30 AM - 12:00 PM",
      title: "Auto Expo",
      description: "Experience the future of autonomous vehicles and smart transportation.",
      location: "Exhibition Center",
      category: "Exhibition",
      color: "from-green-500 to-emerald-500",
    },
    {
      time: "01:00 PM - 05:00 PM",
      title: "Bug Bounty",
      description: "Hunt for vulnerabilities and win prizes in this security challenge.",
      location: "Security Zone",
      category: "Competition",
      color: "from-yellow-500 to-orange-500",
    },
  ];

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
            scrub: 1,
          },
        }
      );

      timelineRef.current.forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: index % 2 === 0 ? 50 : -50, y: 20 },
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
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    };

    const cleanup = gsap.context(() => {
      animateTimeline();
    });

    return () => cleanup.revert();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4">
      <Card className="w-full max-w-6xl border-none bg-transparent shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent" style={{fontFamily:"Zen Dots"}}>
            Event Timeline
          </CardTitle>
          <CardDescription className="text-gray-300 text-2xl mt-4 font-bold" style={{fontFamily : "Michroma"}}>
            Suite of events curated for you 🚀
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="relative timeline-container mt-10">
            <div
              ref={lineRef}
              className="absolute top-0 left-1/2 w-1 bg-gradient-to-b from-cyan-500 to-purple-500 transform -translate-x-1/2 hidden sm:block"
            ></div>

            {events.map((event, index) => (
              <div
                key={index}
                ref={(el) => (timelineRef.current[index] = el)}
                className="flex flex-col sm:flex-row items-center w-full mb-12 relative group"
                onMouseEnter={() => setActiveEvent(index)}
                onMouseLeave={() => setActiveEvent(null)}
                role="article"
                aria-label={`${event.title} event details`}
              >
                {/* Timeline Dot */}
                <div
                  className={`hidden sm:block absolute left-1/2 w-6 h-6 bg-gradient-to-r ${event.color} rounded-full transform -translate-x-1/2 z-10 transition-transform duration-300 ${
                    activeEvent === index ? "scale-125" : ""
                  }`}
                >
                  <div className="absolute w-4 h-4 bg-black rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300" />
                </div>

                {/* Cyberpunk-Inspired Event Card */}
                <div
                  className={`relative w-full sm:w-5/12 p-6 rounded-xl bg-black/60 backdrop-blur-md border border-gray-800 hover:border-cyan-500 shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all duration-300 group-hover:scale-105 ${
                    index % 2 !== 0 ? "sm:ml-auto" : "sm:mr-auto"
                  }`}
                >
                  {/* Cyberpunk Glow Border */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 group-hover:opacity-10 transition-opacity duration-300"></div>

                  <span
                    className={`absolute -top-3 left-4 inline-block bg-gradient-to-r ${event.color} text-white px-4 py-1 rounded-full text-sm  tracking-wider font-black `} style={{fontFamily:"Michroma"}}
                  >
                    {event.category}
                  </span>

                  <h3 className="text-xl font-bold text-white neon-text mb-2" style={{fontFamily : "Michroma"}}>{event.title}</h3>
                  <p className="text-gray-400 mb-4">{event.description}</p>

                  <div className="flex items-center gap-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-cyan-400" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-pink-400" />
                      <span className="text-sm">{event.location}</span>
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
