import React, { useState, useEffect } from "react";
import UserServices from "../services/UserServices";

export const Context = React.createContext();

// este contexto alamacena los datos de usuario para poder pasarlos a otros componentes

export default function AppProvider({ children }) {

    const [user, setUser]= useState({name:"", points:""});

    const getUserData = async () => { //doble async porque si no te llegan promesas por todos lados
        const userData = await UserServices.getUser();
        setUser(userData);
    }

    useEffect(() => getUserData(),[]); //usamos el useEffect para hacer que la funcion se ejecute 1 sola vez, a su vez, a get user data lo llamamos como arrow, para que REACT no se queje.

  return (
    <Context.Provider value={{ user }}>
      {children}
    </Context.Provider>
  );
}

