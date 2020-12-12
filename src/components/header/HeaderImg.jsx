import React, {useContext}  from "react";
import {Context} from "../../context/ContextProvider";
import headerElectronics from "../../assets/header-x1.png"

function HeaderImg (){

    const {onHistory} = useContext(Context);
    
    return (
        <div className="header-img">
            <img className="img-electronics" src={headerElectronics} alt="Electronics Header"/>
            <h1>{onHistory ? "Redeem history" : "Electronics"}</h1>
        </div>
    )
};

export default HeaderImg;