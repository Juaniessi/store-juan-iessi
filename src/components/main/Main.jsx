import React, {useEffect, useState} from "react";
import Filter from "./Filter";
import ProductsGalery from "./ProductsGalery";
import ProductServices from "../../services/ProductServices";

function Main (){

    const [products, setProducts]= useState([]);

    const sortProducts = (sortFunction) => {
        const sortedProducts = products.slice().sort(sortFunction); //el slice lo que hace es "clonar" el el array antes de ordenarlo con el sort
        setProducts(sortedProducts);
    }

    const getProducts = async () => { //doble async porque si no te llegan promesas por todos lados
        const productsArray = await ProductServices.getProducts(); //el static que pusimos antes hace que esto funcione
        
        setProducts(productsArray); //setea el arrayDeProductos en productos
    }

    useEffect(getProducts,[]); //usamos el useEffect para hacer que la funcion se ejecute 1 sola vez

    return (
        <div>
            <Filter sortProducts={sortProducts}/> {/* paso por props la funcion al componenete filtro */}
            <ProductsGalery products={products}/> {/* le paso una prop que son todos los productos */}
        </div>
    )
};

export default Main;