import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap } from "lucide-react";
import heroImage from "../assets/Hero.jpg";
import { useEffect, useState, useRef } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] w-full overflow-hidden bg-zinc-500">
      <div
        className={`absolute inset-0 z-0 transition-transform duration-1000 ease-out ${
          isVisible ? "scale-100" : "scale-110"
        }`}
      >
        <img src={heroImage || "/placeholder.svg"} alt="hero image" className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div
          className={`flex min-h-[70vh] flex-col items-center justify-center text-center transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="max-w-3xl">
            <h1
              className={`mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl transition-all duration-800 delay-400 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <span className="block">
                <span className="text-purple-400">Think big</span>,{" "}
                <span className="text-purple-300">achieve more</span>
              </span>
              <span className="mt-2 block">
                at{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Techtopia
                </span>
              </span>
            </h1>
            <p
              className={`mb-8 text-lg text-gray-300 sm:text-xl transition-all duration-800 delay-600 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              Make your data invisible by generating unlimited identities. Experience the next level in privacy
              protection for online and travel.
            </p>

            <div
              className={`mb-16 flex flex-col gap-4 sm:flex-row sm:justify-center transition-all duration-800 delay-800 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              >
                Live Demo
              </Button>
            </div>

            <div
              className={`grid grid-cols-1 gap-4 sm:grid-cols-2 transition-all duration-800 delay-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm hover:translate-y-[-5px] transition-transform duration-200 ease-out animate-float">
                <div className="mb-3 inline-block rounded-lg bg-purple-500/20 p-2">
                  <Zap className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Free Trial Available</h3>
                <p className="text-sm text-gray-400">Start protecting your privacy today with our flexible trial</p>
              </div>
              <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm hover:translate-y-[-5px] transition-transform duration-200 ease-out animate-float animation-delay-500">
                <div className="mb-3 inline-block rounded-lg bg-pink-500/20 p-2">
                  <Shield className="h-6 w-6 text-pink-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Privacy Features</h3>
                <p className="text-sm text-gray-400">Advanced protection features included by default</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
