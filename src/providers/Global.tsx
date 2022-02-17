import React, { useState, useEffect } from "react";

// Types
type ContextValue = {
  fetchRandomNumber: () => void;
  randomNumber: number;
  errorExist: boolean;
  setNumberInput: any;
  submitNumberInput: () => void;
  resultado: string;
  ganhou: boolean;
  ledNumber: string[];
};

const DefaultValues = {
  fetchRandomNumber: () => {},
  randomNumber: 0,
  errorExist: false,
  setNumberInput: () => {},
  submitNumberInput: () => {},
  resultado: "",
  ganhou: false,
  ledNumber: [],
};

const GlobalContext = React.createContext<ContextValue>(DefaultValues);

export const GlobalProvider: React.FC = ({ children }) => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [errorExist, setErrorExist] = useState(false);

  const fetchRandomNumber = () => {
    const api =
      "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300";

    fetch(api)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          const errorArray = response.status.toString().split("");
          setErrorExist(true);
          setLedNumber(errorArray);
        }
      })
      .then((data) => {
        if (data) {
          setErrorExist(false);
          setRandomNumber(data.value);
        }
      })
      .catch((error) => {
        setErrorExist(true);
        console.log("Ocorreu um erro no fetch: " + error.message);
      });

    // Reset
    setErrorExist(false);
    setResultado("");
    setLedNumber(["0"]);
    setGanhou(false);
  };

  // Verificar se o palpite é menor, maior ou certo
  const [numberInput, setNumberInput] = useState<any>();
  const [ledNumber, setLedNumber] = useState(["0"]);
  const [resultado, setResultado] = useState("");
  const [ganhou, setGanhou] = useState(false);

  const submitNumberInput = () => {
    const inputFormatado = parseInt(numberInput);

    if (inputFormatado >= 1 && inputFormatado <= 300) {
      if (inputFormatado === randomNumber) {
        setResultado("");
        setGanhou(true);
      } else if (inputFormatado < randomNumber) {
        setResultado("É maior");
      } else if (inputFormatado > randomNumber) {
        setResultado("É menor");
      } else {
        alert("Você não digitou um número válido!");
      }

      // Splita os números inseridos no input e cria um array
      const arrayNumbers = inputFormatado.toString().split("");
      setLedNumber(arrayNumbers);
    } else {
      alert("Digite um valor entre 1 e 300!");
    }
  };

  useEffect(() => {
    fetchRandomNumber();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        fetchRandomNumber,
        randomNumber,
        errorExist,
        setNumberInput,
        submitNumberInput,
        resultado,
        ganhou,
        ledNumber,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Criando um hook do context
export const useGlobal = () => React.useContext(GlobalContext);
