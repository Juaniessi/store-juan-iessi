/* eslint-disable react-hooks/exhaustive-deps */
//esto elimina el warning del dependencis depth
import React, {useContext, useState, useEffect} from "react";
import {Context} from "../../context/ContextProvider";
import logo from "../../assets/aerolab-logo.svg";
import coinIcon from "../../assets/coin.svg";
import AddCoins from "./AddCoins";
import UserServices from "../../services/UserServices";
//importo font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHome,
    faHistory,
} from '@fortawesome/free-solid-svg-icons'

function NavBar (){

    const {user:{name, points}, products, setProducts, setOnHistory} = useContext(Context); /* redeemHistory es una propiedad el usuario */

    const [flag, setFlag] = useState(false); /* uso esto para mostar o no el modal de compra de monedas */
    const [showHistory, setHistoryFlag] = useState(null); // para mostar el historial
    const [auxProducts, setAuxProducts] = useState([]);

    const redeemHistoryFunction = async () =>{
        const redeemHistoryFromFetch = await UserServices.getHistory();
        if(products !== redeemHistoryFromFetch){
            setAuxProducts(products);
        }
        setProducts((showHistory ? redeemHistoryFromFetch : auxProducts));
        setOnHistory(showHistory); //showHistory y onHistory tienen el mismo valor, igualandola me ahorro traer la variable
    }

    const handleFlag = () => { /* uso esto para mostar o no el modal de compra de monedas */
        setFlag (!flag);
    };

    const handleHistory = () =>{
        setHistoryFlag(!showHistory);
    };

    useEffect(() => {    //el "if" me permite asegurarme de que por más que haya una variación del showHistory no me lo actualice antes del getProducts
        if (showHistory != null){
            redeemHistoryFunction();
        }
    },[showHistory]);

    return (
        <nav>
            <div className="header-bar">
               <img src={logo} alt="Barrilete de aerolab"/>
               <div className="user">
                <h3>{name}</h3>
                <button className="header-button" onClick={handleHistory} title={`see ${name} history`}>{!showHistory ? <FontAwesomeIcon icon={faHistory} /> : <FontAwesomeIcon icon={faHome} /> }</button>                
                    <div className="user-coin" title="Add more coins" onClick={handleFlag}>
                        <span className="cant-coin">
                            {points}
                        </span>
                        <img className="icon-coin" src={coinIcon} alt="Monedas"/>
                    </div>
               </div>
            </div>
        {flag && <AddCoins/>/* si flag es verdadero, renderiza */} 
        </nav>
    )
};

export default NavBar;