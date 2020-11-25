import React, { useState, useEffect } from "react";
import ProductServices from "../../services/ProductServices";
import ProductCard from "./ProductCard";

function Productos (){

    const [productos, setProductos]= useState([]);

    const getProducts = async () => { //doble async porque si no te llegan promesas por todos lados
        const arrayDeProductos = await ProductServices.getProductos(); //el static que pusimos antes hace que esto funcione
        
        setProductos(arrayDeProductos); //setea el arrayDeProductos en productos
    }

    useEffect(getProducts,[]); //usamos el useEffect para hacer que la funcion se ejecute 1 sola vez

    return (
        
        <div>
            {productos.map(producto => <ProductCard key={producto._id} {...producto}/>)} {/* paso como prop a "productcard" todas las propiedades de "producto" */}
        </div>
    )
};

export default Productos;