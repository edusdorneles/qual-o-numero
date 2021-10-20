import React from 'react'
import { useGlobal } from '../../providers/Global';

// Styles
import './styles.css';

const Input = () => {
    const { setNumberInput, submitNumberInput } = useGlobal();

    return (
        <div className="input-container">
            <input 
                type="number"                
                placeholder="Digite o palpite"                
                onChange={(e) => {setNumberInput(e.target.value)}}
            />

            <button type="button" onClick={() => {submitNumberInput()}} >ENVIAR</button>
        </div>
    )
}

export default Input;