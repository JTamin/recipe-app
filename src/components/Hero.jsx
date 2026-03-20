import heroImg from "../assets/hero-background.jpg";

export const Hero = () => {
  return (
    <div className="relative h-[400px] w-full">
      <img
        src={heroImg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div> {/* dark overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 drop-shadow-lg">
          Delicious Recipes, Every Day
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white/90">
          Explore hundreds of recipes from around the world.
        </p>
      </div>
    </div>
  );
};
