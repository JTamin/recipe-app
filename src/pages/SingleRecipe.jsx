import { useParams } from "react-router-dom";
import { SingleRecipeItems } from "../components/SingleRecipeItems";
import { useFetch } from "../hooks/useFetch";
import { Helmet } from "react-helmet";

export const SingleRecipe = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch(
    `https://dummyjson.com/recipes/${id}`,
  );
  const singleRecipe = data;
  if (!singleRecipe) return <p className="text-white">Loading...</p>;
  return (
    <>
      <Helmet>
        <title>{singleRecipe.name} </title>
        <meta name="description" content={singleRecipe.name} />
      </Helmet>
      <SingleRecipeItems key={singleRecipe.id} {...singleRecipe} />;
    </>
  );
};
