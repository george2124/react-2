import React from 'react'

const Item = ({ info }) => {
  return (
    <a href="" className="film">
       <img src= {info.image} alt="" />
       <p>{info.id}</p>
       <p>{info.name}</p>
       <p>{info.category} </p>
       <p>{info.description}</p>
       <p>{info.img} </p>
       <p>{info.stock} </p>
    </a>
  )
}
export default Item;