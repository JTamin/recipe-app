import { useParams } from "react-router-dom";
import { useHooks } from "../hooks/useHooks";
import { SingleRecipeItems } from "../components/SingleRecipeItems";

export const SingleRecipe = () => {
  const { id } = useParams();

  const { data, loading, error } = useHooks(
    `https://dummyjson.com/recipes/${id}`,
  );
  const singleRecipe = data;
  if (!singleRecipe) return <p className="text-white">Loading...</p>;
  return <SingleRecipeItems key={singleRecipe.id} {...singleRecipe} />;
};
