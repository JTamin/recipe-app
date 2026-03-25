import { Helmet } from "react-helmet";
import { Hero } from "../components/Hero";
import { Recipe } from "../components/Recipe";

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Recipes</title>
        <meta name="description" content="browse recipes" />
      </Helmet>
      <Hero />
      <h1 className="text-3xl text-white font-semibold ml-12 mt-6 lg:text-5xl">
        Recipes
      </h1>
      <Recipe />
    </div>
  );
};
