import React, {useContext} from "react";
import buyWithe from "../../assets/buy-white.svg";
import iconCoin from "../../assets/coin.svg";
import ProductServices from "../../services/ProductServices";
import UserServices from "../../services/UserServices";
import {Context} from "../../context/ContextProvider";

function HoverCard (props){

    const {setUser, setRedeemState} = useContext(Context); 

    const {
        cost, 
        id //desde productCard le paso la pro id (sin el _)
    } = props;

    let redeemS = null;

    const redeemProduct = async (buttonEvent) => {
        buttonEvent.target.disabled = true; //evento que desabilita el botón
        redeemS = await ProductServices.postRedeem(id);
        setRedeemState(redeemS);
        const updatedUser = await UserServices.getUser();
        setUser(updatedUser);  
        buttonEvent.target.disabled = false; 
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