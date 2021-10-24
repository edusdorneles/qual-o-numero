import React from 'react'
import LedNumber from './LedNumber/LedNumber';
import { useGlobal } from '../../providers/Global';

// Styles
import './styles.css';


/*
    Lógica:
    - Para cada número digitado pelo usuário, retorno um componente
    com o número condizente.

    - Botão para reiniciar o jogo só vai aparecer caso os estados de
    erro ou de vitória forem verdadeiros.
*/


const LedContainer = () => {
    const { errorExist, fetchRandomNumber, resultado, ganhou, ledNumber } = useGlobal();    

    return (
        <div className="led-container">
            {/* Resposta do servidor */}
            <div className="response-text-container">
                <h4 className="response-text-response">
                    {/* Caso haja erro */}
                    { errorExist && <p className="response-error">ERRO</p> }

                    {/* Caso o palpite seja errado */}
                    { resultado && <p className="response-other">{resultado}</p> }

                    {/* Caso ganhe */}
                    { ganhou && <p className="response-win">Você acertou!!!</p> }
                </h4>
            </div>

            {/* Segmentos de LED */}
            <div className="led-number-container">
                {
                    (ledNumber.length >= 1) &&
                    ledNumber.map((number, idx) => (                        
                        <LedNumber key={idx} number={number} />
                    ))
                }
            </div>

            {/* Reiniciar o jogo */}
            <div className="restart-container">
                <div className="restart-button">
                    { 
                        (errorExist || ganhou) &&
                        <button type="button" onClick={() => {fetchRandomNumber()}}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2364 1.7625C9.14822 0.675 7.65478 0 5.99625 0C2.67917 0 0 2.685 0 6C0 9.315 2.67917 12 5.99625 12C8.7955 12 11.1295 10.0875 11.7974 7.5H10.2364C9.62101 9.2475 7.95497 10.5 5.99625 10.5C3.51219 10.5 1.49343 8.4825 1.49343 6C1.49343 3.5175 3.51219 1.5 5.99625 1.5C7.24203 1.5 8.35272 2.0175 9.16323 2.835L6.74672 5.25H12V0L10.2364 1.7625Z" fill="white"/>
                            </svg>
                            NOVA PARTIDA
                        </button>                        
                    }
                </div>
            </div>
        </div>
    )
}

export default LedContainer;