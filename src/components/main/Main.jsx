import React, {useEffect, useContext} from "react";
import Filter from "./Filter";
import ProductsGalery from "./ProductsGalery";
import ProductServices from "../../services/ProductServices";
import {Context} from "../../context/ContextProvider";
import usePagination from "../../utils/PaginationCustomHook";

function Main (){

    const {products, setProducts} = useContext(Context);

    const {nextPage, prevPage, currentItems, maxProdQuant, shownProducts } = usePagination(products, 16);

    const getProducts = async () => { //doble async porque si no te llegan promesas por todos lados
        const productsArray = await ProductServices.getProducts(); //el static que pusimos antes hace que esto funcione
        
        setProducts(productsArray); //setea el arrayDeProductos en productos
    }

    useEffect(getProducts,[]); //usamos el useEffect para hacer que la funcion se ejecute 1 sola vez

    return (
        <div>
            <Filter products = {products} setProducts = {setProducts} hidden = {false} nextPage = {nextPage} prevPage={prevPage} maxProdQuant={maxProdQuant} shownProducts={shownProducts}/> {/* paso por props la funcion al componenete filtro */}
            <ProductsGalery products={currentItems()}/> {/* le paso una prop que son todos los productos */}
            <Filter products = {products} setProducts = {setProducts} hidden = {true} nextPage = {nextPage} prevPage={prevPage} maxProdQuant={maxProdQuant} shownProducts={shownProducts}/>
        </div>
    )
};

export default Main;