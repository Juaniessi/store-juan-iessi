class UserServices {
    static async getUser(){ //"static" para poder llamarlo sin crear un nuevo objeto de la clase, para no tenes que hacer el "NEW"
        const headers ={
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk" 
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

    static async postCoins(cantCoins){ //"static" para poder llamarlo sin crear un nuevo objeto de la clase, para no tenes que hacer el "NEW"
        const headers ={
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk" 
        }

        const parameters = { //parametros requeridos para hacer el post
            body: {amount: cantCoins}, //cantCoins es para decirle al end point cuantas monedas debe agregar
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