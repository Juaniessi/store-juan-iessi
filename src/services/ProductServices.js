class ProductServices {
    static async getProducts(){ //"static" para poder llamarlo sin crear un nuevo objeto de la clase, para no tener que hacer el "NEW"
        const headers ={
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2YjI2ZjdkMjAwMjA0MTE0YzUiLCJpYXQiOjE2MDcxODM3MjN9.BjtQYRlkAcjscJVLE08Zq57DgNBGP-t-Vekvw25Ffz0" 
        }
        try{
            let response = await fetch("https://coding-challenge-api.aerolab.co/products", {headers} ) //el segundo parametro del fetch sirve para pedirle que tenga en cuenta otras cosas
            if (response.status !== 200) {
                throw new Error("Ups, something went wrong!")
            }
            response = await response.json();
            return response;
        }
        catch(error){
            return false;
        };
    }

    static async postRedeem(productId){ //"static" para poder llamarlo sin crear un nuevo objeto de la clase, para no tenes que hacer el "NEW"
        const headers ={
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2YjI2ZjdkMjAwMjA0MTE0YzUiLCJpYXQiOjE2MDcxODM3MjN9.BjtQYRlkAcjscJVLE08Zq57DgNBGP-t-Vekvw25Ffz0" 
        }

        const parameters = { //parametros requeridos para hacer el post
            body: JSON.stringify({productId}), //productId es para decirle al end point que producto quiero
            method: "post",
            mode: "cors",
            headers
        }
        try{
            let response = await fetch("https://coding-challenge-api.aerolab.co/redeem", parameters ) //el segundo parametro del fetch sirve para pedirle que tenga en cuenta otras cosas
            if (response.status !== 200) {
                throw new Error("Ups, something went wrong!")
            }
            response = await response.json();
            return response;
        }

        catch(error){
            return false;
        };
    }

}

export default ProductServices;