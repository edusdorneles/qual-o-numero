import React, { useState, useEffect, useRef } from 'react'
import { useGlobal } from '../../providers/Global';

// Styles
import './styles.css';

const Input = () => {    
    /*
        Lógica:
        - Busco estados e funções do global context.

        - Defino uma referência para o input utilizando o Hook useRef,
        e depois crio uma função para limpar tanto o campo quanto
        o estado do input.
    */

    const { errorExist, ganhou, setNumberInput, submitNumberInput } = useGlobal();

    const inputRef = useRef();
    const clearInput = () => {        
        setNumberInput();
        inputRef.current.value = '';
    }
    
    const [disabled, setDisabled] = useState(false)

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