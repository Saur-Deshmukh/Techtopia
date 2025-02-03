import map from '/Techtopia.svg';

export function ExploreMap() {
  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Explore new horizons with{" "}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Techtopia!
        </span>
      </h2>
      <div className="flex justify-center">
        <object id="map" data={map} type="image/svg+xml" className="max-w-full h-auto">
          <img src={map} alt="map" className="max-w-full h-auto" />
        </object>
      </div>
    </section>
  );
}

export default ExploreMap;
