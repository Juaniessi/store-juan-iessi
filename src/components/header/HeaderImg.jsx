import React, {useContext}  from "react";
import {Context} from "../../context/ContextProvider";
import headerElectronics from "../../assets/header-x1.png"

function HeaderImg (){

    const {user:{redeemHistory}, products} = useContext(Context);
    
    return (
        <div className="header-img">
            <img className="img-electronics" src={headerElectronics} alt="Electronics Header"/>
            <h1>{products.toString() === redeemHistory.toString() ? "Redeem history" : "Electronics"}</h1> {/* estringifico los arrays para poder compararlos */}
        </div>
    )
};

export default HeaderImg;