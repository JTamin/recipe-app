import { Hero } from "../components/Hero";
import { Recipe } from "../components/Recipe";

export const Home = () => {
  return (
    <div>
      <Hero />
      <h1 className="text-3xl text-white font-semibold ml-12 mt-6">Recipes</h1>
      <Recipe />
    </div>
  );
};
