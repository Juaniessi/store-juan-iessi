import React, { useState, useEffect } from 'react';
import HoverCard from "./HoverCard";
//import Overlay from './Overlay'

import buyIcon from "../../assets/buy-blue.svg";

function ProductCard(props) {

// let variableHover; //variable para hacer el hover
const { _id, category, cost, img, name } = props;

// useEffect(()=> {console.log(product)}, [])
  return(
    
    <div className="product-card">
      <HoverCard cost={cost} id={_id}/> {/* estoy pasando por props atributos a hover card */}
      <div className="images-ctn">
          <img src={buyIcon} alt="buy-icon" className="buy-icon"/>
          <img src={img.url} alt={name} className="prod-img"/>
      </div>
      <div className="text-box">
            <h4 className="prod-category">{category}</h4>
            <h3 className="prod-name">{name}</h3>
      </div>
    </div>
  )
}

export default ProductCard;