import { lazy, Suspense } from "react";
import { Loading } from "./Loading";
import { useHooks } from "../hooks/useHooks.js";

const RecipeCapsules = lazy(() => import("./RecipeCapsule.jsx"));
export const Recipe = () => {
  const { data, loading, error } = useHooks("https://dummyjson.com/recipes");
  if (error) return <h1>Error</h1>;
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col  items-center  gap-6 p-4 w-full">
        {data?.recipes?.map((item, index) => {
          const isEven = index % 2 === 0;
          return <RecipeCapsules key={item.id} item={item} isEven={isEven} />;
        })}
      </div>
    </Suspense>
  );
};
