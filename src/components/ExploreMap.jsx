import React from 'react';

export function ExploreMap() {
  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Explore new horizons with{" "}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Techopia!
        </span>
        <img src="map.svg" alt="" className='m-auto -rotate-90 h-[1200px]'/>
      </h2>
    </section>
  );
}

export default ExploreMap;