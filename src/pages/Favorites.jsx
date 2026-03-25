import RecipeCapsule from "../components/RecipeCapsule";
import { useFavContext } from "../context/favoriteContext";
import { Helmet } from "react-helmet";

export const Favorites = () => {
  const { favorite, toggleFavorite } = useFavContext();

  return (
    <div className="flex flex-col  items-center  gap-6 p-4 w-full">
      <Helmet>
        <title>Favorite Page</title>
        <meta name="description" content="Browse your Favorites" />
      </Helmet>
      {favorite.map((item, index) => (
        <RecipeCapsule key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};
