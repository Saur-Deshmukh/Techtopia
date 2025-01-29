import React from 'react';
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="text-purple-500">Think big</span>, <span className="text-purple-400">achieve more</span>
        <br />
        at <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Techopia</span>
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        Make your data invisible by generating unlimited identities. The next level in privacy protection for online and
        travel!
      </p>
      <div className="flex justify-center gap-4 mb-16">
        <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
        <Button variant="outline">Live Demo</Button>
      </div>
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-purple-800 to-pink-600 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Tech Illustration Placeholder</h3>
          <p>This is where a tech-related illustration or animation would be displayed.</p>
        </div>
        <div className="absolute -top-10 -left-10 w-40 bg-black/50 backdrop-blur-sm rounded-lg p-4">
          <p className="text-sm">Free trial available</p>
          <p className="text-xs text-gray-400">FLEXIBLE USE</p>
        </div>
        <div className="absolute -bottom-10 -right-10 w-40 bg-black/50 backdrop-blur-sm rounded-lg p-4">
          <p className="text-sm">Privacy features</p>
          <p className="text-xs text-gray-400">INCLUDED BY DEFAULT</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;