import React, { useState, useEffect, useRef } from 'react'
import { useGlobal } from '../../providers/Global';

// Styles
import './styles.css';


/*
    Lógica:
    - Assim que o componente montar (ou quando os estados definidos mudarem),
    faço uma verificação, caso ocorra um erro ou o usuário tenha ganho, adiciono
    as classes de "disable" para o input e para o botão.

    Obs: As funções executadas no "onClick" do input e do botão, estão sendo
    importadas pelo context "Global".
*/


const Input = () => {
    const { errorExist, ganhou, setNumberInput, submitNumberInput } = useGlobal();
    const [disabled, setDisabled] = useState(false)

    // Função para limpar o campo de input
    const inputRef = useRef();
    const clearInput = () => {        
        setNumberInput();
        inputRef.current.value = '';
    }

    useEffect(() => {
        if(errorExist || ganhou) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [errorExist, ganhou]);


    return (
        <div className="input-container">
            <input 
                type="number"
                placeholder="Digite o palpite"
                onChange={(e) => {setNumberInput(e.target.value)}}
                ref={inputRef}
                disabled={disabled}
            />

            <button
                type="button" 
                onClick={() => {submitNumberInput(); clearInput();}}
                disabled={disabled}
                className={disabled ? 'disabled-button' : ''}
            >
                ENVIAR
            </button>
        </div>
    )
}

export default Input;