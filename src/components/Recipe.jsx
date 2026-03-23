import { lazy, Suspense, useState } from "react";
import { Loading } from "./Loading";
import { useHooks } from "../hooks/useHooks.js";
import Pagination from "./pagination.jsx";

const RecipeCapsules = lazy(() => import("./RecipeCapsule.jsx"));
export const Recipe = () => {
  const { data, loading, error } = useHooks("https://dummyjson.com/recipes");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const start = (currentPage - 1) * itemsPerPage;
  const currentItems = data?.recipes.slice(start, start + itemsPerPage);

  if (error) return <h1>Error</h1>;

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col  items-center  gap-6 p-4 w-full">
        {currentItems?.map((item, index) => {
          return <RecipeCapsules key={item.id} item={item} index={index} />;
        })}
        <Pagination
          item={data}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </Suspense>
  );
};
