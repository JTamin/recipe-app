import { useState } from "react";

import { IoIosTimer } from "react-icons/io";
import { PiCookingPot } from "react-icons/pi";
import { GiFlame } from "react-icons/gi";

export const SingleRecipeItems = ({
  image,
  name,
  ingredients,
  instructions,
  cookTimeMinutes,
  prepTimeMinutes,
  caloriesPerServing,
}) => {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowshowInstructions] = useState(false);
  return (
    <div className="text-white max-w-4xl mx-auto p-4">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-72 object-cover rounded-2xl mb-6"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{name}</h1>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-zinc-800 p-4 rounded-xl text-center">
          <p className="flex justify-center items-center gap-2 text-lg">
            <PiCookingPot /> {cookTimeMinutes} mins
          </p>
          <p className="text-sm text-zinc-400">Cook Time</p>
        </div>

        <div className="bg-zinc-800 p-4 rounded-xl text-center">
          <p className="flex justify-center items-center gap-2 text-lg">
            <IoIosTimer /> {prepTimeMinutes} mins
          </p>
          <p className="text-sm text-zinc-400">Prep Time</p>
        </div>

        <div className="bg-zinc-800 p-4 rounded-xl text-center">
          <p className="flex justify-center items-center gap-2 text-lg">
            <GiFlame /> {caloriesPerServing} cal
          </p>
          <p className="text-sm text-zinc-400">Per Serving</p>
        </div>
      </div>

      {/* Ingredients Toggle */}
      <div className="mb-4">
        <button
          onClick={() => setShowIngredients((prev) => !prev)}
          className="mb-0 px-4 py-2 bg-yellow-500 text-zinc-900 font-semibold rounded hover:bg-yellow-400 transition w-full"
        >
          {showIngredients ? "Hide Ingredients" : "Show Ingredients"}
        </button>

        {/* Ingredients List */}
        {showIngredients && (
          <ul className="bg-zinc-800 p-4 rounded-xl space-y-2">
            {ingredients.map((ingredients, index) => (
              <li key={index} className="text-zinc-300">
                {index + 1}. {ingredients}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <button
          onClick={() => setShowshowInstructions((prev) => !prev)}
          className="mb-0 px-4 py-2 bg-yellow-500 text-zinc-900 font-semibold rounded hover:bg-yellow-400 transition w-full"
        >
          {showInstructions ? "Hide instructions" : "Show instructions"}
        </button>
        {showInstructions && (
          <ul className="bg-zinc-800 p-4 rounded-xl space-y-2">
            {instructions.map((instruction, index) => (
              <li key={index} className="text-zinc-300">
                {index + 1}. {instruction}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
