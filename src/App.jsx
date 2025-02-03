import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ExploreMap } from "@/components/ExploreMap";
import Timeline from "@/components/Timeline";
import { Footer } from "@/components/Footer";
import ParallaxLanding from "./components/Parallax";

function Home() {
  return (
    <div className="min-h-screen bg-[#05001f] text-white overflow-x-hidden">
        {/* <ParallaxLanding/> */}
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        <ExploreMap />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
