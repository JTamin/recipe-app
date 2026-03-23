import { lazy, Suspense, useEffect, useState } from "react";
import { Loading } from "./Loading";
import Pagination from "./pagination.jsx";
import { useFetch } from "../hooks/useFetch.js";
import { useDebounce } from "use-debounce";

const RecipeCapsules = lazy(() => import("./RecipeCapsule.jsx"));
export const Recipe = () => {
  const [search, setSearch] = useState("");
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/recipes?limit=0",
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [value] = useDebounce(search, 500);

  const itemsPerPage = 6;
  const hasSearch = search.trim() !== "";
  const filteredItems = data?.recipes?.filter((recipe) =>
    recipe.name.toLowerCase().includes(value.toLowerCase()),
  );

  const sourceItems = hasSearch ? filteredItems : data?.recipes;
  const totalPages = Math.ceil(sourceItems?.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const currentItems = sourceItems?.slice(start, start + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [value]);

  if (error) return <h1>Error</h1>;

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex justify-center">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded bg-zinc-200 w-60 text-10"
          placeholder="Search recipe..."
        />
      </div>
      <div className="flex flex-col  items-center  gap-6 p-4 w-full">
        {currentItems?.length > 0 ? (
          currentItems?.map((item, index) => {
            return <RecipeCapsules key={item.id} item={item} index={index} />;
          })
        ) : (
          <h1 className="text-zinc-100 text-2xl">No recipes found</h1>
        )}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </Suspense>
  );
};
