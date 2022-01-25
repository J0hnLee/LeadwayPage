import React from "react";
import  Link  from "next/link";

const ProductItem = (props) => {
  console.log(
props.item.key)
  return (
  <div >
  <li > 
  <Link href={`products/${props.item.name}`}>{props.item.name}</Link>
  </li>
   <span >{`price is ${props.item.price} `}</span> 
  </div>)
}

export default ProductItem;