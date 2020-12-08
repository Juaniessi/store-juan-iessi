import React, {useContext, useState, useEffect} from "react";
import logo from "../../assets/aerolab-logo.svg";
import coinIcon from "../../assets/coin.svg";
import {Context} from "../../context/ContextProvider";
import AddCoins from "./AddCoins";

function HeaderBar (){

    const {user:{name, points}} = useContext(Context);

    const [flag, setFlag] = useState(false);

    const handleFlag = () => {
        setFlag (!flag);
    };

    return (
        <div>
            <div className="header-bar">
               <img src={logo} alt="Barrilete de aerolab"/>
               <div className="user">
                    <h3 onClick={()=> console.log("no anda")}>{name}</h3>
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