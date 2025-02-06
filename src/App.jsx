import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ExploreMap } from "@/components/ExploreMap";
import Timeline from "@/components/Timeline";
import { Footer } from "@/components/Footer";
// import Scroller from "./components/Scroller1";
import ParallaxLanding from "./components/Parallax";

function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-white overflow-x-hidden">
        <ParallaxLanding />
      {/* <Header /> */}
      <main className="container">
        <ExploreMap />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
