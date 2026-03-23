import { IoIosTimer } from "react-icons/io";
import { PiCarrotLight } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useFavContext } from "../context/favoriteContext";

const RecipeCapsule = ({ item, index }) => {
  const { toggleFavorite, favorite } = useFavContext();
  const { image, name, id, cookTimeMinutes, ingredients } = item;
  const isEven = index % 2 === 0;
  const hasFavorite = favorite.find((item) => item.id === id);
  return (
    <div className="flex justify-end w-full h-60 bg-zinc-800 rounded-full">
      <div
        className={`flex-1 flex items-center justify-center relative ${
          !isEven
            ? "order-last right-[-8vw] lg:right-[-11vw] xl:right-[-13.5vw]"
            : "left-[-7vw] lg:left-[-11vw] xl:left-[-13.5vw]"
        }`}
      >
        <img
          src={image}
          alt={name}
          className="sm:h-60 md:h-65 lg:h-70 object-contain rounded-full"
        />
      </div>

      <div className="flex flex-col justify-center flex-1 p-4 gap-3 text-white ml-5">
        <p
          className={`text-2xl font-bold ${
            isEven ? "text-right mr-12" : "text-left"
          }`}
        >
          {name}
        </p>

        <p
          className={`flex items-center gap-2 text-sm text-zinc-300 ${
            isEven ? "justify-end mr-12" : "justify-start"
          }`}
        >
          <IoIosTimer />
          {cookTimeMinutes} min
        </p>

        <p
          className={`flex items-center gap-2 text-sm text-zinc-300 ${
            isEven ? "justify-end mr-12" : "justify-start"
          }`}
        >
          <PiCarrotLight />
          {ingredients?.length} ingredients
        </p>

        <div
          className={`flex gap-3 mt-2 ${
            isEven ? "justify-end mr-12" : "justify-start"
          }`}
        >
          <Link
            to={`/recipe/${id}`}
            className="px-4 py-2 bg-yellow-500 text-zinc-900 font-semibold rounded hover:bg-yellow-400 transition cursor-pointer"
          >
            View Recipe
          </Link>

          <button
            className="px-4 py-2 bg-zinc-700 text-white font-semibold rounded hover:bg-zinc-600 transition cursor-pointer"
            title="Add to Favorites"
            onClick={() => {
              toggleFavorite(item);
            }}
          >
            <FaStar
              className={`cursor-pointer transition-colors ${
                hasFavorite ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCapsule;
