import React, {useContext} from "react";
import logo from "../../assets/aerolab-logo.svg";
import coinIcon from "../../assets/coin.svg";
import {Context} from "../../context/ContextProvider";

function HeaderBar (){

const {user:{name, points}} = useContext(Context);

    return (
        <div className="header-bar">
           <img src={logo} alt="Barrilete de aerolab"/>
           <div className="user">
                <h3>{name}</h3>
                <div className="user-coin">
                    <span className="cant-coin">
                        {points}
                    </span>
                    <img className="icon-coin" src={coinIcon} alt="Monedas"/>
                </div>
           </div>           
        </div>
    )
};

export default HeaderBar;