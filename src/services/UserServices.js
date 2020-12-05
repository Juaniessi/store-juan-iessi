class UserServices {
    static async getUser(){ //"static" para poder llamarlo sin crear un nuevo objeto de la clase, para no tenes que hacer el "NEW"
        const headers ={
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2YjI2ZjdkMjAwMjA0MTE0YzUiLCJpYXQiOjE2MDcxODM3MjN9.BjtQYRlkAcjscJVLE08Zq57DgNBGP-t-Vekvw25Ffz0" 
        }

        try{
            let response = await fetch("https://coding-challenge-api.aerolab.co/user/me", {headers} ) //el segundo parametro del fetch sirve para pedirle que tenga en cuenta otras cosas
            response = await response.json();
            return response;
        }

        catch(error){
            console.log(error)
        };
    }

    static async postCoins(amountCoins){ //"static" para poder llamarlo sin crear un nuevo objeto de la clase, para no tenes que hacer el "NEW"
        const headers ={
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2YjI2ZjdkMjAwMjA0MTE0YzUiLCJpYXQiOjE2MDcxODM3MjN9.BjtQYRlkAcjscJVLE08Zq57DgNBGP-t-Vekvw25Ffz0" 
        }

        const parameters = { //parametros requeridos para hacer el post
            body: {amount: amountCoins}, //amountCoins es para decirle al end point cuantas monedas debe agregar
            method: "post",
            mode: "cors",
            headers
        }

        try{
            let response = await fetch("https://private-anon-0211b9ef35-aerolabchallenge.apiary-mock.com/user/points", parameters ) //el segundo parametro del fetch sirve para pedirle que tenga en cuenta otras cosas
            response = await response.json();
            return response;
        }

        catch(error){
            console.log(error)
        };
    }
}

export default UserServices;