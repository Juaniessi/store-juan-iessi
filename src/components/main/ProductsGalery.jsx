import React from "react";
import ProductCard from "./ProductCard";
import SuccessErrorModal from "./SuccessErrorModal";

//al .map le paso tambien i, que es el subindice, osea la posición que el objeto ocupa en el array, con esto puedo agregarlo al product id y generar una key única.

function ProductsGalery ({products}){

    return (
        
        <div className="products-galery">
            {products.map((product, i) => <ProductCard key={product._id+i} {...product}/>)} {/* paso como prop a "productcard" todas las propiedades de "producto" */}
            <SuccessErrorModal/>
        </div>
    )
};

export default ProductsGalery;