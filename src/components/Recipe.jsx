import { useEffect, useState } from "react";
import { IoIosTimer } from "react-icons/io";
import { PiCarrotLight } from "react-icons/pi";
import { FaStar } from "react-icons/fa";

export const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        if (!res.ok) throw new Error("Response not ok!");
        const data = await res.json();
        setRecipes(data.recipes);
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 p-4 w-full">
      {recipes?.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={item.id}
            className="flex w-full  h-60 bg-zinc-800 rounded-full "
          >
            {/* Image */}
            <div
              className={`flex-1 flex items-center justify-center relative  ${
                !isEven ? "order-last right-[-8vw]" : "left-[-7vw]"
              }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-[35vw] md:h-[13vw] object-fill rounded-full"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center flex-1 p-4 gap-3 text-white ml-5">
              {/* Recipe Name */}
              <p
                className={`text-2xl font-bol ${
                  isEven
                    ? "justify-end text-right mr-12"
                    : "justify-start text-left"
                }`}
              >
                {item.name}
              </p>

              {/* Cook Time */}
              <p
                className={`flex items-center gap-2 text-sm text-zinc-300 ${
                  isEven
                    ? "justify-end text-right mr-12"
                    : "justify-start text-left"
                }`}
              >
                <IoIosTimer />
                {item.cookTimeMinutes} min
              </p>

              {/* Ingredients Count */}
              <p
                className={`flex items-center gap-2 text-sm text-zinc-300 ${
                  isEven
                    ? "justify-end text-right mr-12"
                    : "justify-start text-left"
                }`}
              >
                <PiCarrotLight />
                {item.ingredients?.length} ingredients
              </p>

              {/* Buttons */}
              <div
                className={`flex gap-3 mt-2 ${
                  isEven
                    ? "justify-end text-right mr-12"
                    : "justify-start text-left"
                }`}
              >
                <button className="px-4 py-2 bg-yellow-500 text-zinc-900 font-semibold rounded hover:bg-yellow-400 transition cursor-pointer">
                  View Recipe
                </button>

                <button
                  className="px-4 py-2 bg-zinc-700 text-white font-semibold rounded hover:bg-zinc-600 transition cursor-pointer"
                  title="Add to Favorites"
                >
                  <FaStar className="text-yellow-500" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
