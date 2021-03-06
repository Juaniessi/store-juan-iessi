class UserServices {
    static async getUser(){ //"static" para poder llamarlo sin crear un nuevo objeto de la clase, para no tenes que hacer el "NEW"
        const headers ={
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2YjI2ZjdkMjAwMjA0MTE0YzUiLCJpYXQiOjE2MDcxODM3MjN9.BjtQYRlkAcjscJVLE08Zq57DgNBGP-t-Vekvw25Ffz0" 
        }

        const url = "https://coding-challenge-api.aerolab.co/user/me"

        try{
            let response = await fetch(url, {headers} ) //el segundo parametro del fetch sirve para pedirle que tenga en cuenta otras cosas
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

    static async getHistory(){ //"static" para poder llamarlo sin crear un nuevo objeto de la clase, para no tener que hacer el "NEW"
        const headers ={
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2YjI2ZjdkMjAwMjA0MTE0YzUiLCJpYXQiOjE2MDcxODM3MjN9.BjtQYRlkAcjscJVLE08Zq57DgNBGP-t-Vekvw25Ffz0" 
        }

        const url = "https://coding-challenge-api.aerolab.co/user/history"

        try{
            let response = await fetch(url, {headers} ) //el segundo parametro del fetch sirve para pedirle que tenga en cuenta otras cosas
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

    static async postCoins(amountCoins){ //"static" para poder llamarlo sin crear un nuevo objeto de la clase, para no tenes que hacer el "NEW"
        const headers ={
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYWQ2YjI2ZjdkMjAwMjA0MTE0YzUiLCJpYXQiOjE2MDcxODM3MjN9.BjtQYRlkAcjscJVLE08Zq57DgNBGP-t-Vekvw25Ffz0" 
        }

        const parameters = { //parametros requeridos para hacer el post
            body: JSON.stringify({amount: amountCoins}), //amountCoins es para decirle al end point cuantas monedas debe agregar
            method: "post",
            mode: "cors",
            headers
        }

        const url = "https://coding-challenge-api.aerolab.co/user/points"

        try{
            let response = await fetch(url, parameters ) //el segundo parametro del fetch sirve para pedirle que tenga en cuenta otras cosas
            if (response.status !== 200) {
                throw new Error("Ups, something went wrong!")
            }
            response = await response.json();
            return true; //no necesito retornar la "response", no la estoy usando
        }

        catch(error){
            return false;
        };
    }
}

export default UserServices;