import React from "react";
import coinIcon from "../../assets/coin.svg";
import UserServices from "../../services/UserServices";

function AddCoins (){

    const addMoreCoins = async (cantCoins) => {
       await UserServices.postCoins(cantCoins);
       alert(`Agregaste ${cantCoins}`)
    }

    return (
        <div className="more-coins">
            <button className="add-coins" onClick={() => addMoreCoins(1000)}>+ 1000<img className="img-coin" src={coinIcon}/></button>
            <button className="add-coins" onClick={() => addMoreCoins(5000)}>+ 5000<img className="img-coin" src={coinIcon}/></button>
            <button className="add-coins" onClick={() => addMoreCoins(7500)}>+ 7500<img className="img-coin" src={coinIcon}/></button>
        </div>
    )
};

export default AddCoins;