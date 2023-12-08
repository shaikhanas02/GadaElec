import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Header() {
  const {setSearch, search} = useContext(UserContext) ;
  return (
    <div className="h-16 p-3 border"> 
      <Link to="/">Gada Elec.</Link> 
      <input
        type="text" 
        placeholder="Search..."
        className="border"
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>🔍</button>
      <Link to="/products" className="text-blue-500">
       <strong>Explore</strong></Link>
      <Link to="/profile"><PersonOutlineIcon /></Link>
      <Link to="/wishlist"><FavoriteBorderIcon /></Link>
      <Link to="/cart"><ShoppingCartOutlinedIcon/></Link>
    </div> 
  );
} 


export default Header;
