import React , {useState} from "react";
import rightArrow from "../../assets/arrow-right.svg";
import leftArrow from "../../assets/arrow-left.svg";
import {params} from "../../services/const";


function Filter ({products, setProducts}){

    const [activeFilter, setActiveFilter] = useState(0);

    const sortProducts = (buttonNumber, sortFunction) => { //sortFunction es "callback" que trae cada uno de los botones
        const sortedProducts = products.slice().sort(sortFunction); //el slice lo que hace es "clonar" el el array antes de ordenarlo con el sort
        setProducts(sortedProducts);
        setActiveFilter(buttonNumber);
    }

    return (
        <div className="filter">
            <div className="buttons-board">
                <span className="prod-quant">16 of 32 products</span>
                <div className="sort">
                    <span className="sort-by">Sort by:</span>
                    <p className="sort-controls-ctn">
                        Ordenar por: 
                        {params.map(({callback, wording}, i)=> <button key={i} className={`filter-btn ${activeFilter===i ? 'active':''}`} onClick={()=>sortProducts(i,callback)}>{wording}</button>)} {/* i es el segundo parametro del map y trae le subindice del array. En Sort products llamo a i buttonNumber*/}
                    </p>
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