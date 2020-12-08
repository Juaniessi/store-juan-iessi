import React, {useEffect, useContext} from "react";
import Filter from "./Filter";
import ProductsGalery from "./ProductsGalery";
import ProductServices from "../../services/ProductServices";
import {Context} from "../../context/ContextProvider";

function Main (){

    const {products, setProducts} = useContext(Context);

    const getProducts = async () => { //doble async porque si no te llegan promesas por todos lados
        const productsArray = await ProductServices.getProducts(); //el static que pusimos antes hace que esto funcione
        
        setProducts(productsArray); //setea el arrayDeProductos en productos
    }

    useEffect(getProducts,[]); //usamos el useEffect para hacer que la funcion se ejecute 1 sola vez

    return (
        <div>
            <Filter products = {products} setProducts = {setProducts} hidden = {false}/> {/* paso por props la funcion al componenete filtro */}
            <ProductsGalery products={products}/> {/* le paso una prop que son todos los productos */}
            <Filter products = {products} setProducts = {setProducts} hidden = {true}/>
        </div>
    )
};

export default Main;