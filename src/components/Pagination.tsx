// Pagination.tsx
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (totalPages > 5) {
        if (
          i === 1 ||
          i === 2 ||
          i === totalPages ||
          i === totalPages - 1 ||
          i === currentPage ||
          i === currentPage - 1 ||
          i === currentPage + 1
        ) {
          pages.push(i);
        } else if (i === 3 && currentPage > 4) {
          pages.push("...");
        } else if (i === totalPages - 2 && currentPage < totalPages - 3) {
          pages.push("...");
        }
      } else {
        pages.push(i);
      }
    }
    return pages;
  };

  return (
    <nav aria-label="Page navigation example" className="mt-6">
      <ul className="flex items-center justify-center -space-x-px h-10 text-base">
        <li className="mx-1" title="Anterior">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight cursor-pointer text-black bg-white  border-2 border-black hover:bg-blue-500"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>
        {renderPageNumbers().map((page, index) =>
          typeof page === "number" ? (
            <li key={page} className="mx-1">
              <button
                onClick={() => onPageChange(page)}
                className={`flex items-center justify-center px-4 h-10 mx-1 leading-tight ${
                  currentPage === page
                    ? "bg-blue-600  text-black border border-gray-300 hover:bg-blue-500"
                    : "bg-white border border-gray-300 hover:bg-blue-500"
                } text-black bg-white  border-2 border-black hover:bg-blue-500`}
              >
                {page}
              </button>
            </li>
          ) : (
            <li
              key={index}
              className="px-4 h-10 flex items-center justify-center text-black bg-white  border-2 border-black hover:bg-blue-500 mx-1"
            >
              {page}
            </li>
          )
        )}
        <li className="mx-1" title="Siguiente">
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight cursor-pointer text-black bg-white  border-2 border-black hover:bg-blue-500"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-3 h-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
