import React from "react";
import LeftArrowIcon from "../../assets/icons/arrow-left.svg?react";
import RightArrowIcon from "../../assets/icons/arrow-right.svg?react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}) => {
  const pages: (number | string)[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1, 2, 3, "…", totalPages - 2, totalPages - 1, totalPages);
  }

  return (
    <nav
      className={`flex items-center justify-between py-4 border-t border-gray-200 ${className}`}
    >
      {/* Previous */}
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="flex items-center gap-1 text-gray-600 hover:text-gray-900 disabled:opacity-50"
      >
        <LeftArrowIcon className="w-4 h-4" />
        Previous
      </button>

      {/* Page numbers */}
      <ul className="flex items-center space-x-2 list-none p-0 m-0">
        {pages.map((item, idx) =>
          item === "…" ? (
            <li key={`dots-${idx}`}>
              <span className="text-gray-400">…</span>
            </li>
          ) : (
            <li key={item}>
              <button
                onClick={() => onPageChange(item as number)}
                className={
                  item === currentPage
                    ? "w-8 h-8 flex items-center justify-center rounded bg-indigo-100 text-brand"
                    : "w-8 h-8 flex items-center justify-center rounded text-gray-600 hover:bg-indigo-100"
                }
              >
                {item}
              </button>
            </li>
          )
        )}
      </ul>

      {/* Next */}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 text-gray-600 hover:text-gray-900 disabled:opacity-50"
      >
        Next
        <RightArrowIcon className="w-4 h-4" />
      </button>
    </nav>
  );
};

export default Pagination;
