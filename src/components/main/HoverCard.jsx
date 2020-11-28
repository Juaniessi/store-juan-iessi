import React, {useContext, useState} from "react";
import {Context} from "../../context/ContextProvider";
import buyWithe from "../../assets/buy-white.svg";
import iconCoin from "../../assets/coin.svg";

function HoverCard (props){

    const {
        cost,
        _id
    } = props;

    const {user} = useContext(Context) 

    return (
        <div className="hover-card">
            <img src={buyWithe} alt="comprar"/>
            <div className="cost">
                <span className="cant-coin">{cost}</span>
                <img className="" src={iconCoin} alt="coin"/>
            </div>
            <button className="redeem-btn">Redeem now</button>
        </div>
    )
};

export default HoverCard;