import React, { useContext } from "react";
// import { UserContext } from "../Context";

function getPaginatedData({data, currentPage, itemsPerPage}) {
    const lastPostIndex = currentPage * itemsPerPage;
    const firstPostIndex = lastPostIndex - itemsPerPage;
   console.log(data);
    return  data.slice(firstPostIndex, lastPostIndex);
  }
  

export default getPaginatedData;
