import { Helmet } from "react-helmet";
import { useFavContext } from "../context/favoriteContext";

export const Favorites = () => {
  const { favorite } = useFavContext();

  return (
    <div className="flex flex-col items-center gap-6 p-4 w-full">
      <Helmet>
        <title>Favorite Page</title>
        <meta name="description" content="Browse your Favorites" />
      </Helmet>

      {favorite.length === 0 ? (
        <h1 className="text-white text-2xl">No Favorites found</h1>
      ) : (
        favorite.map((item, index) => (
          <RecipeCapsule key={item.id} item={item} index={index} />
        ))
      )}
    </div>
  );
};
