import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div>
      {totalPages > 0 && (
        <div className="flex justify-center">
          <button
            className="text-white text-3 disabled:opacity-35 hover:bg-yellow-500 disabled:hover:bg-transparent"
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            <GrPrevious />
          </button>
          <div className="flex justify-center  text-white">
            {Array.from({ length: totalPages }, (_, i) => {
              const page = i + 1;
              return (
                <button
                  key={i}
                  onClick={() => setCurrentPage(page)}
                  className={`h-10 w-10 rounded-full flex items-center hover:bg-amber-300 justify-center text-sm text-zinc-700 m-1 cursor-pointer ": ${
                    currentPage === page ? "bg-amber-300" : "bg-white"
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>
          <button
            className="text-white text-3 disabled:opacity-35 hover:bg-yellow-500 disabled:hover:bg-transparent"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            <GrNext />
          </button>
        </div>
      )}
    </div>
  );
};
export default Pagination;
