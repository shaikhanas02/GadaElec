import React, { useContext, useEffect } from "react";
import Card from "../Components/Card";
import { UserContext } from "../Context";
import Header from "../Components/Header";
import Filter from "../Components/Filter";
import getPaginatedData from "../Functions/getPaginatedData";
import Pagination from "../Components/Pagination";

function Products() {
  const {
    setData,
    filters,
    currentPage,
    itemsPerPage,
    filteredData,
    setFilteredData,
    search, setSearch, setSearchedData, data, searchedData
  } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/admin");
        const info = await res.json();
        setData(info.data);

        const filtered = info
          // .filter((item) => {
          //   if (filters.category.length === 0) return true;
          //   return filters.category.includes(item.category);
          // })
          // .filter((item) => {
          //   if (!filters.rating) return true;
          //   return item.rating.rate >= filters.rating;
          // })
          // .sort((a, b) => {
          //   if (!filters.sortBy) return 0;
          //   switch (filters.sortBy) {
          //     case "priceLowToHigh":
          //       return a.price - b.price;
          //     case "priceHighToLow":
          //       return b.price - a.price;
          //     case "nameAToZ":
          //       return a.title.localeCompare(b.title);
          //     case "nameZToA":
          //       return b.title.localeCompare(a.title);
          //     default:
          //       return 0;
          //   }
          // });

        setFilteredData(filtered);

        // const searched = info
        // .filter((item) =>item.title.toLowerCase().includes(search.toLowerCase())) ;
        // console.log(searched) ;
        // setSearchedData(searched) ;

      } catch (error) {
        console.error("Error fetching data :", error);
      }
    };
    fetchData();
  }, [setData, setFilteredData, filters, search]);

 
  return (
    <>
      <Header />
      <div>
        <div>
          <Filter />
        </div>
        <div className="flex flex-wrap">
          {search.length > 0 
          ? getPaginatedData({ data , currentPage, itemsPerPage }).map((item)=>(
            <Card data={item} key={item.id} />
          )) 
          : 
            getPaginatedData({ data , currentPage, itemsPerPage }).map(
              (item) => <Card data={item} key={item.id} />
            )
         
          }
        </div>
        <Pagination />
      </div>
    </>
  );
}

export default Products;
