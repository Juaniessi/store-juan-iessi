import React, {useContext} from "react";
import coinIcon from "../../assets/coin.svg";
import UserServices from "../../services/UserServices";
import {Context} from "../../context/ContextProvider";

function AddCoins (){

    const {setUser} = useContext(Context);

    const addMoreCoins = async (amountCoins) => {
       const response = await UserServices.postCoins(amountCoins);
       const updatedUser = await UserServices.getUser(); //me traigo el usuario, lo asigno a uan variable y luego lo seteo
       setUser(updatedUser); 
       alert(`Added ${amountCoins} coins. You now have ${response["new Points"]} coins.`);
    }

    return (
        <div className="more-coins">
            <button className="add-coins" onClick={() => addMoreCoins(1000)}>+ 1000<img className="img-coin" alt="Coin" src={coinIcon}/></button>
            <button className="add-coins" onClick={() => addMoreCoins(5000)}>+ 5000<img className="img-coin" alt="Coin" src={coinIcon}/></button>
            <button className="add-coins" onClick={() => addMoreCoins(7500)}>+ 7500<img className="img-coin" alt="Coin" src={coinIcon}/></button>
        </div>
    )
};

export default AddCoins;