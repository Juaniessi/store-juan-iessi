import React from "react";
import ProductCard from "./ProductCard";

function ProductsGalery ({products}){

    return (
        
        <div className="products-galery">
            {products.map(product => <ProductCard key={product._id} {...product}/>)} {/* paso como prop a "productcard" todas las propiedades de "producto" */}
        </div>
    )
};

export default ProductsGalery;