import React, { useState, useEffect } from 'react';
//import Overlay from './Overlay'

import buyIcon from "../../assets/buy-blue.svg";

function ProductCard(props) {

// let variableHover; //variable para hacer el hover
const { _id, category, cost, img, name } = props;

// useEffect(()=> {console.log(product)}, [])
  return(

    <div className="product-card">
        <img src={buyIcon} alt="buy-icon" className="buy-icon" />
        <img src={img.url} alt=""/>
        <div className="text-box">
            <h4>{category}</h4>
            <h3>{name}</h3>
        </div>
    </div>
  )
}

export default ProductCard;