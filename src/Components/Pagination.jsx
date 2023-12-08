import React, { useContext } from "react";
import { UserContext } from "../Context";

function Pagination() {
  const { filteredData, onPageChange, itemsPerPage, currentPage } =
    useContext(UserContext);

  let pageNumbers = [];
  const totalItems = filteredData && filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  } 

  return (
    <div>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="mx-2 px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white"
      >
        Prev
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`mx-2 px-4 py-2 rounded ${
            page === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          } hover:bg-blue-500`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="mx-2 px-4 py-2 rounded bg-gray-300 text-white hover:bg-blue-500"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
