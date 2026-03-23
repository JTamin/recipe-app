import { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext();

export default function Favorite({ children }) {
  const [favorite, setFavorite] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  const toggleFavorite = (fav) => {
    setFavorite((prev) => {
      let updatedFavorites;
      const exists = prev?.find((item) => item.id === fav.id);

      if (exists) {
        updatedFavorites = prev.filter((item) => item.id !== fav.id);
      } else {
        updatedFavorites = [...prev, fav];
      }

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      return updatedFavorites;
    });
  };
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite]);
  return (
    <FavoriteContext.Provider value={{ toggleFavorite, favorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}
export const useFavContext = () => {
  return useContext(FavoriteContext);
};
