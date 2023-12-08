import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import getData from "../Functions/getData";

function Home() {
  // console.log(getData()) ;
  // getPaginatedData() ;
  return (
    <div>
      <Header />
      <h1>Experience Electronics Redefined: Unleash Innovation</h1>
      <p>Discover the Future of Electronics: Unleash Innovation, Immerse in Unparalleled Quality. Experience our cutting-edge technology and elevate your everyday with Gada Electronics. Explore the extraordinary today.</p>
      <button><Link to='/products'>Shop Now</Link></button>
    </div>
  );
}

export default Home;
