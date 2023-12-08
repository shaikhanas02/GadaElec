import React, { useContext } from "react";
import { UserContext } from "../Context";

function Filter() {
  const { filters, setFilters } = useContext(UserContext);

  const handleCategory = (category) => {
    const updatedCategories = [...filters.category];
    const categoryIndex = updatedCategories.indexOf(category); 
    if (categoryIndex !== -1) {
      updatedCategories.splice(categoryIndex, 1);
    } else {
      updatedCategories.push(category);
    } 

    setFilters({
      ...filters,
      category: updatedCategories,
    });
  };

  const handleRating = (rating) => {
    setFilters({
      ...filters,
      rating,
    });
  };

  const handleSort = (sortBy) => {
    setFilters({
      ...filters,
      sortBy,
    });
  };

  // console.log(filters);

  return (
    <div>
      <h1>Filter</h1>
      {/* <input type="range" name="" id="" /> */}

      <p>Category</p>
      <input
        type="checkbox"
        name=""
        value="men's clothing"
        onChange={(e) => handleCategory(e.target.value)}
      />
      <label htmlFor="">Men's Clothing</label>

      <input
        type="checkbox"
        name=""
        id=""
        value="women's clothing"
        onChange={(e) => handleCategory(e.target.value)}
      />
      <label htmlFor="">Women's Clothing</label>

      <input
        type="checkbox"
        name=""
        id=""
        value="jewelery"
        onChange={(e) => handleCategory(e.target.value)}
      />
      <label htmlFor="">Jewelery</label>

      <input
        type="checkbox"
        name=""
        id=""
        value="electronics"
        onChange={(e) => handleCategory(e.target.value)}
      />
      <label htmlFor="">Electronics</label>

      {/* <p>Company</p>
      <select name="" id="">
        <option value="">1</option>
        <option value="">1</option>
        <option value="">1</option>
        <option value="">1</option>
        <option value="">1</option>
        <option value="">1</option>
      </select> */}

      <p>Rating</p>
      <input
        type="radio"
        name="rating"
        value="4"
        onChange={(e) => handleRating(e.target.value)}
      />
      <label htmlFor="">4⭐ & Above</label>

      <input
        type="radio"
        name="rating"
        value="3"
        onChange={(e) => handleRating(e.target.value)}
      />
      <label htmlFor="">3⭐ & Above</label>

      <input
        type="radio"
        name="rating"
        value="3"
        onChange={(e) => handleRating(e.target.value)}
      />
      <label htmlFor="">2⭐ & Above</label>

      <input
        type="radio"
        name="rating"
        value="1"
        onChange={(e) => handleRating(e.target.value)}
      />
      <label htmlFor="">1⭐ & Above</label>

      <p>Sort By</p>
      <input
        type="radio"
        name="sortBy"
        value="priceLowToHigh"
        onChange={(e) => handleSort(e.target.value)}
      />
      <label htmlFor="">Price: Low To High</label>

      <input
        type="radio"
        name="sortBy"
        value="priceHighToLow"
        onChange={(e) => handleSort(e.target.value)}
      />
      <label htmlFor="">Price: High To Low</label>

      <input
        type="radio"
        name="sortBy"
        value="nameAToZ"
        onChange={(e) => handleSort(e.target.value)}
      />
      <label htmlFor="">Name: A To Z</label>

      <input
        type="radio"
        name="sortBy"
        value="nameZtoA"
        onChange={(e) => handleSort(e.target.value)}
      />
      <label htmlFor="">Name: Z To A</label>
    </div>
  );
}

export default Filter;
