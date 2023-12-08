import React, { createContext, useState } from "react";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    category: [],
    rating: null,
    sortBy: null,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const value = {
    data,
    setData,
    products,
    setProducts,
    filters,
    setFilters,
    currentPage,
    itemsPerPage,
    onPageChange: handlePageChange,
    filteredData,
    setFilteredData,
    search,
    setSearch,
    setSearchedData,
    searchedData,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
