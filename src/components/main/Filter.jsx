import React from "react";
import rightArrow from "../../assets/arrow-right.svg";
import leftArrow from "../../assets/arrow-left.svg";

function Filter (){

    return (
        <div className="filter">
            <div className="botonera">
                <span className="prod-quant">16 of 32 products</span>
                <div className="sort">
                    <span className="sort-by">Sort by:</span>
                    <button className="filter-btn">Most recent</button>
                    <button className="filter-btn">Lowes price</button>
                    <button className="filter-btn">Highest price</button>
                </div>
            </div>
            <div className="move-btn">
                <button className="arrow-btn"><img src={leftArrow} alt="Flecha izquierda"/></button>
                <button className="arrow-btn"><img src={rightArrow} alt="Flecha derecha"/></button>
            </div>     
        </div>
    )
};

export default Filter;