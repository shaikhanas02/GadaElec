import React, { useContext, useEffect } from 'react'
import { UserContext } from '../Context';

function getData() {

    const {setData, data} = useContext(UserContext) ;

    useEffect(()=>{

        const fetchData= async()=>{
         
        const res = await fetch('https://fakestoreapi.com/products')

        const info = await res.json() ;
        setData(info) ;

        }
        fetchData() ;

    },[]) ;

  return data ;
}

export default getData ;