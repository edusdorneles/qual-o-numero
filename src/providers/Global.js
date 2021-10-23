import React, { useState, useEffect } from "react";
import Axios from 'axios';


/*
    Lógica:
    - Crio uma função para ser chamada sempre que precisar fazer
    uma requisição para o servidor.

        1. Inicio o Axios (biblioteca para fazer requisições HTTP)
        e defino o metódo "GET", para buscar dados do servidor.

        2. Caso haja erro, capturo qual o status deste erro e atrelo
        no meu estado que vai mostrar o "StatusCode" nos segmentos de LED.

        3. Caso não haja erros, seto que não houve erros e atrelo a 
        resposta do meu servidor à um estado que guarda esta resposta.

    - Utilizo o Hook useEffect para executar a função para buscar um número
    assim que o componente for montado. Para a aplicação ter um valor inicial.
*/


const GlobalContext = React.createContext({});

export const GlobalProvider = (props) => {
    const [randomNumber, setRandomNumber] = useState(0);
    const [errorExist, setErrorExist] = useState(false);        

    const fetchRandomNumber = () => {
        const api = 'https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300';

        Axios.get(api)
            .catch(error => {
                const errorArray = error.response.status.toString().split('');
                setErrorExist(true);
                setLedNumber(errorArray);
            })
            .then(response => {
                if(response) {
                    setErrorExist(false);
                    setRandomNumber(response.data.value);
                }
            });

        // Redefinindo estados caso precise reiniciar o jogo
        setErrorExist(false);
        setResultado('');
        setLedNumber([0]);
        setGanhou(false);
    }

    // Verificar se o palpite é menor, maior ou certo
    const [numberInput, setNumberInput] = useState();
    const [ledNumber, setLedNumber] = useState([0]);
    const [resultado, setResultado] = useState('');
    const [ganhou, setGanhou] = useState(false);

    const submitNumberInput = () => {
        const inputFormatado = parseInt(numberInput);        

        if(inputFormatado >= 1 && inputFormatado <= 300) {
            if(inputFormatado === randomNumber) {
                setResultado('');
                setGanhou(true);
            } else if (inputFormatado < randomNumber) {
                setResultado('É maior');
            } else if (inputFormatado > randomNumber) {
                setResultado('É menor');
            } else {
                alert('Você não digitou um número válido!');
            }

            // Splita os números inseridos no input e cria um array
            const arrayNumbers = inputFormatado.toString().split('');
            setLedNumber(arrayNumbers);
        } else {
            alert('Digite um valor entre 1 e 300!');
        }
    }

    useEffect(() => {
        fetchRandomNumber();
    }, []);

    return(
        <GlobalContext.Provider value={{ fetchRandomNumber, randomNumber, errorExist, setNumberInput, submitNumberInput, resultado, ganhou, ledNumber }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

// Criando um hook do context
export const useGlobal = () => React.useContext(GlobalContext)