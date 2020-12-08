/* eslint-disable react-hooks/exhaustive-deps */
//esto elimina el warning del dependencis depth
import React, {useContext, useState, useEffect} from "react";
import {Context} from "../../context/ContextProvider";
import logo from "../../assets/aerolab-logo.svg";
import coinIcon from "../../assets/coin.svg";
import AddCoins from "./AddCoins";
//importo font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHome,
    faHistory,
} from '@fortawesome/free-solid-svg-icons'

function HeaderBar (){

    const {user:{name, points, redeemHistory}, products, setProducts} = useContext(Context); /* redeemHistory es una propiedad el usuario */

    const [flag, setFlag] = useState(false);
    const [showHistory, setHistoryFlag] = useState(false);
    const [auxProducts, setAuxProducts] = useState([]);

    const handleFlag = () => { /* uso esto para mostar o no la compra de monedas */
        setFlag (!flag);
    };

    const handleHistory = () =>{
        setHistoryFlag(!showHistory);
    };


    useEffect(() => {

        if(products !== redeemHistory){
            setAuxProducts(products);
        }

        setProducts((showHistory ? redeemHistory : auxProducts));
    },[showHistory])

    return (
        <div>
            <div className="header-bar">
               <img src={logo} alt="Barrilete de aerolab"/>
               <div className="user">
                <h3>{name}</h3>
                <button className="header-button" onClick={handleHistory} title={`see ${name} history`}>{showHistory === false ? <FontAwesomeIcon icon={faHistory} /> : <FontAwesomeIcon icon={faHome} /> }</button>                
                    <div className="user-coin" title="Add more coins" onClick={handleFlag}>
                        <span className="cant-coin">
                            {points}
                        </span>
                        <img className="icon-coin" src={coinIcon} alt="Monedas"/>
                    </div>
               </div>
            </div>
        {flag === false ? "" : <AddCoins/>}
        </div>
    )
};

export default HeaderBar;