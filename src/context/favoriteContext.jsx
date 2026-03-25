import { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext();

export default function Favorite({ children }) {
  const [favorite, setFavorite] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  const toggleFavorite = (fav) => {
    setFavorite((prev) => {
      const exists = prev?.find((item) => item.id === fav.id);

      return exists
        ? prev.filter((item) => item.id !== fav.id)
        : [...prev, fav];
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
