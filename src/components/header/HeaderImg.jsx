import React from "react";
import headerElectronics from "../../assets/header-x1.png"

function HeaderImg (){

    return (
        <div className="header-img">
            <img className="img-electronics" src={headerElectronics} alt="Electronics Header"/>
            <h1>Electronics</h1>
        </div>
    )
};

export default HeaderImg;