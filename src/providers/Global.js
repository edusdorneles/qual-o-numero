import React, { useState, useEffect } from "react";
import Axios from 'axios';

const GlobalContext = React.createContext({});

export const GlobalProvider = (props) => {    
    const [randomNumber, setRandomNumber] = useState(0);
    const [errorExist, setErrorExist] = useState(false);    

    const fetchRandomNumber = () => {
        const api = 'https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300';        

        Axios.get(api)
            .catch(error => {
                setErrorExist(error.response.status);
            })
            .then(response => {
                if(response) {
                    setErrorExist(false);
                    setRandomNumber(response.data.value);
                }
            });
    }

    useEffect(() => {
        fetchRandomNumber();

        /*
            Lógica:
            - Utilizo o useEffect para executar as funções dentro deste
            hook, assim que o componente estiver montado. 
            
            - Passo um array vazio, para o useEffect executar uma única vez.
        */
    }, []);

    return(
        <GlobalContext.Provider value={{ randomNumber, errorExist }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

// Criando um hook do context
export const useGlobal = () => React.useContext(GlobalContext)