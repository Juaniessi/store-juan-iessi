import React, { useContext } from 'react';
import HoverCard from "./HoverCard";
import {Context} from "../../context/ContextProvider";
import buyIcon from "../../assets/buy-blue.svg";
import iconCoin from "../../assets/coin.svg";

function ProductCard(props) {

const { _id, category, cost, img, name } = props;

const {user:{points}} = useContext(Context);

  return(
    
    <div className="product-card">
      {cost < points && <HoverCard cost={cost} id={_id}/>}
      <div className="images-ctn">
        {points > cost ?
          <img src={buyIcon} alt="buy-icon" className="buy-icon"/> :
          <div className="buy-icon cant-buy">
            <h3 className="missing-coins">{`You need ${cost-points}`}</h3>
            <img src={iconCoin} alt="coin" className="coin"/>
          </div>
        }
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