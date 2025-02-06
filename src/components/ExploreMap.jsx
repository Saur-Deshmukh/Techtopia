import map from "/Techtopia.svg";
import map1 from "/Techtopia-Laptop.svg";

export function ExploreMap() {
  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-6xl font-bold text-center mb-16">
        Explore new horizons with{" "}
        <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
          Techtopia!
        </span>
      </h2>
      <div className="flex justify-center">
        <picture>
          {/* Loads map for mobile (max-width: 768px) */}
          <source srcSet={map} media="(max-width: 768px)" />
          {/* Loads map1 for larger screens */}
          <img src={map1} alt="Techtopia Map" className="max-w-full h-auto" />
        </picture>
      </div>
    </section>
  );
}

export default ExploreMap;
