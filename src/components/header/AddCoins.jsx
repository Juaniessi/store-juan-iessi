import React, {useContext, useState} from "react";
import coinIcon from "../../assets/coin.svg";
import UserServices from "../../services/UserServices";
import {Context} from "../../context/ContextProvider";
import StylishAlert from "./StylishAlert";

function AddCoins (){

    const {setUser} = useContext(Context);

    const [addedCoins, setAddedCoins] = useState({status: false, succeed: false});

    const addMoreCoins = async (amountCoins, buttonElement) => {
        buttonElement.disabled = true; //en este caso, para desabilitar el boton, como en el onclick tenia que pasar la cantidad de monedas, lo pasaba como arrow y no como evento, por eso agrego un segundo parametro
        const succeed = await UserServices.postCoins(amountCoins);
        setAddedCoins({status: true, succeed}); //invoco el "alert"
        setTimeout(() => setAddedCoins({status: false, succeed: false}), 4000);
        const updatedUser = await UserServices.getUser(); //me traigo el usuario, lo asigno a una variable y luego lo seteo. Esto es para que se actualice la cantidad de monedas.
        setUser(updatedUser);
        buttonElement.disabled = false;
    }

    return (
        <>
            <div className="more-coins">
                <button className="add-coins" onClick={(event) => addMoreCoins(1000, event.target)}>+ 1000<img className="img-coin" alt="Coin" src={coinIcon}/></button>
                <button className="add-coins" onClick={(event) => addMoreCoins(5000, event.target)}>+ 5000<img className="img-coin" alt="Coin" src={coinIcon}/></button>
                <button className="add-coins" onClick={(event) => addMoreCoins(7500, event.target)}>+ 7500<img className="img-coin" alt="Coin" src={coinIcon}/></button>
            </div>
            <div className="alert">
                {addedCoins.status && <StylishAlert succeed={addedCoins.succeed} />}
            </div>
        </>
    )
};

export default AddCoins;