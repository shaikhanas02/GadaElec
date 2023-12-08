import React from 'react'

function Card({data, AddtoCart}) {
  return (
    <div className='border p-2 m-4  w-[20%]' > 
        <img src={data.image} alt="img" className='h-48 w-48'/> 
        <p><strong>{data.title}</strong></p>
        <p>${data.price}</p>
        <p>{data.rating.rate}4⭐</p> 
        <p>{data.rating.count} ratings</p> 
        {/* <p>{data.description}</p> */}
        <button onClick={AddtoCart}>Add to Cart</button> 
    </div> 
  )
} 


export default Card ;