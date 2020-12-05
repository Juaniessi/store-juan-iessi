import React from "react";
import buyWithe from "../../assets/buy-white.svg";
import iconCoin from "../../assets/coin.svg";
import ProductServices from "../../services/ProductServices";

function HoverCard (props){

    const {
        cost,
        _id
    } = props;

    const redeemProduct = () => {
        ProductServices.postRedeem(_id);
        alert("¡bien! (no mentira)");
    }

    return (
        <div className="hover-card">
            <img className="buy-bag" src={buyWithe} alt="comprar"/>
            <div className="cost">
                <span className="cant-coin">{cost}</span>
                <img className="coin" src={iconCoin} alt="coin"/>
            </div>
            <button className="redeem-btn" onClick={redeemProduct}>Redeem now</button>
        </div>
    )
};

export default HoverCard;