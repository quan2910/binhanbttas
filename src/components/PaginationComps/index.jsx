import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "../../components/ui/pagination";
import { ArrowRightIcon } from "../../assets/icons";
const PaginationComps = ({ totalPages, className, setPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  // const allPages = Math.ceil(totalPages / 8);
  const handlePrevious = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);
    setPage(currentPage > 1 ? currentPage - 1 : currentPage);
  };
  const handleNext = () => {
    setCurrentPage(currentPage < totalPages ? currentPage + 1 : currentPage);
    setPage(currentPage < totalPages ? currentPage + 1 : currentPage);
  };

  const handlePageChange = (page) => {
    setPage(page);
    setCurrentPage(page);
  };
  return (
    <Pagination className={` relative z-20 ${className}`}>
      <PaginationContent>
        <PaginationItem onClick={handlePrevious}>
          <ArrowRightIcon className="rotate-180" />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem
            key={index}
            className={`small flex h-8 w-8 items-center justify-center gap-1 bg-white rounded-full border border-line p-0 text-text ${
              index + 1 === currentPage ? "bg-primary text-white" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </PaginationItem>
        ))}
        <PaginationItem onClick={handleNext}>
          <ArrowRightIcon />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComps;
