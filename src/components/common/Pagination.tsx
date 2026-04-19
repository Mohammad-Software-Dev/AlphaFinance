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
      className={`flex items-center justify-between py-4 border-t border-light-silver ui-divider ${className}`}
      aria-label="Pagination"
    >
      {/* Previous */}
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="flex items-center gap-1 ui-text-muted hover:ui-text-primary disabled:opacity-50 focus-ring rounded-sm"
      >
        <LeftArrowIcon className=" h-full" />
        <span className="text-xs md:text-sm font-medium hidden sm:inline">
          Previous
        </span>
      </button>

      {/* Page numbers - show only on md and up */}
      <ul className="hidden md:flex items-center space-x-2 list-none p-0 m-0">
        {pages.map((item, idx) =>
          item === "…" ? (
            <li key={`dots-${idx}`}>
              <span className="text-light-silver">…</span>
            </li>
          ) : (
            <li key={item}>
              <button
                type="button"
                onClick={() => onPageChange(item as number)}
                className={
                  item === currentPage
                    ? "w-8 h-8 text-xs md:text-sm  flex items-center justify-center rounded bg-brand-light/50 text-brand"
                    : "w-8 h-8 text-xs md:text-sm flex items-center justify-center rounded ui-text-muted hover:ui-surface-subtle focus-ring"
                }
              >
                {item}
              </button>
            </li>
          )
        )}
      </ul>

      {/* Mobile: Compact display */}
      <span className="block md:hidden text-sm ui-text-muted font-medium px-2">
        {currentPage} / {totalPages}
      </span>

      {/* Next */}
      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 ui-text-muted hover:ui-text-primary disabled:opacity-50 focus-ring rounded-sm"
      >
        <span className="text-xs md:text-sm font-medium hidden sm:inline">
          Next
        </span>
        <RightArrowIcon className=" h-full" />
      </button>
    </nav>
  );
};

export default Pagination;
