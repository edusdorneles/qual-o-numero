import React, { useEffect } from 'react'
import { useGlobal } from '../../providers/Global';

// Styles
import './styles.css';

const LedNumber = () => {
    const { errorExist, fetchRandomNumber, resultado, ganhou } = useGlobal();

    const response = 0;

    const switchLed = () => {
        // Função para remover a classe "segment-disable" de todos os segmentos.
        const segment = document.querySelectorAll('.segment')        
        segment.forEach(segmentDisable => {
            segmentDisable.classList.remove('segment-disable');
        });
        
        const segmentA = document.querySelector('.segment-a');
        const segmentB = document.querySelector('.segment-b');
        const segmentC = document.querySelector('.segment-c');
        const segmentD = document.querySelector('.segment-d');
        const segmentE = document.querySelector('.segment-e');
        const segmentF = document.querySelector('.segment-f');
        const segmentG = document.querySelector('.segment-g');
        
        switch(response) {
            case 1:                
                segmentA.classList.add('segment-disable');
                segmentD.classList.add('segment-disable');
                segmentE.classList.add('segment-disable');
                segmentF.classList.add('segment-disable');
                segmentG.classList.add('segment-disable');
                break;
            case 2:                
                segmentC.classList.add('segment-disable');
                segmentF.classList.add('segment-disable');
                break;
            case 3:
                segmentE.classList.add('segment-disable');
                segmentF.classList.add('segment-disable');                
                break;
            case 4:
                segmentA.classList.add('segment-disable');
                segmentD.classList.add('segment-disable');
                segmentE.classList.add('segment-disable');
                break;
            case 5:
                segmentB.classList.add('segment-disable');
                segmentE.classList.add('segment-disable');
                break;
            case 6:
                segmentB.classList.add('segment-disable');
                break;
            case 7:
                segmentD.classList.add('segment-disable');
                segmentE.classList.add('segment-disable');
                segmentF.classList.add('segment-disable');
                segmentG.classList.add('segment-disable');
                break;
            case 8:                
                break;
            case 9:
                segmentE.classList.add('segment-disable');
                break;
            default:
                segmentG.classList.add('segment-disable');
        }
    }

    useEffect(() => {
        switchLed();
    }, []);

    return (
        <div className="led-number-container">
            {/* Resposta do servidor */}
            <div className="response-text-container">
                <h4 className="response-text-response">
                    {/* Caso haja erro */}
                    { errorExist && <p className="response-error">ERRO</p> }

                    {/* Caso palpite errado */}
                    { resultado && <p className="response-other">{resultado}</p> }

                    {/* Caso ganhe */}
                    { ganhou && <p className="response-win">Você ganhou!!!!</p> }
                </h4>
            </div>

            {/* Segmentos de LED */}
            <div className="led-number">                
                <div className="segment segment-a">
                    <svg width="69" height="15" viewBox="0 0 69 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.269 14.8295H54.5517L68.4885 1.59469C67.1985 0.597612 65.5846 3.8147e-06 63.8301 3.8147e-06H4.63794C2.89411 3.8147e-06 1.29303 0.589094 0.00726318 1.57233L14.269 14.8295Z" fill="#262A34"/>
                    </svg>
                </div>
                
                <div className="segment segment-b">
                    <svg width="17" height="65" viewBox="0 0 17 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.624405 14.2662V55.4704L12.2954 64.2173C14.77 62.9539 16.4669 60.3866 16.4669 57.4177V5.62484C16.4669 3.80751 15.8299 2.14251 14.7721 0.832241L0.624405 14.2662Z" fill="#262A34"/>
                    </svg>
                </div>

                <div className="segment segment-c">
                    <svg width="17" height="65" viewBox="0 0 17 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.624405 50.7207V9.51645L12.2954 0.769611C14.77 2.03407 16.4669 4.60029 16.4669 7.56917V59.3621C16.4669 61.1783 15.8299 62.8433 14.7721 64.1557L0.624405 50.7207Z" fill="#262A34"/>
                    </svg>
                </div>
            
                <div className="segment segment-d">
                    <svg width="69" height="15" viewBox="0 0 69 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.269 0.169458H54.5517L68.4885 13.4053C67.1985 14.4003 65.5846 15 63.8301 15H4.63793C2.8941 15 1.29302 14.4088 0.00725555 13.4256L14.269 0.169458Z" fill="#262A34"/>
                    </svg>
                </div>
                
                <div className="segment segment-e">
                    <svg width="16" height="65" viewBox="0 0 16 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.71614 64.1944C0.644493 62.8799 0 61.2032 0 59.3741V7.58124C0 4.61236 1.69695 2.04614 4.17155 0.781677L15.8425 9.52852V51.064L1.71614 64.1944Z" fill="#262A34"/>
                    </svg>
                </div>

                <div className="segment segment-f">
                    <svg width="16" height="65" viewBox="0 0 16 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.71614 0.815502C0.644493 2.1311 0 3.80888 0 5.63687V57.4298C0 60.3986 1.69695 62.9659 4.17155 64.2293L15.8425 55.4825V13.947L1.71614 0.815502Z" fill="#262A34"/>
                    </svg>
                </div>

                <div className="segment segment-g">
                    <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M51.4494 0.390018H11.0175L0.249847 8.32726L11.0175 16.2656H26.4329H36.034H51.4494L62.217 8.32726L51.4494 0.390018Z" fill="#262A34"/>
                    </svg>
                </div>
            </div>

            {/* Reiniciar o jogo */}
            <div className="restart-container">
                <div className="restart-button">
                    { 
                        errorExist || ganhou ?
                        <button type="button" onClick={() => {fetchRandomNumber()}}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2364 1.7625C9.14822 0.675 7.65478 0 5.99625 0C2.67917 0 0 2.685 0 6C0 9.315 2.67917 12 5.99625 12C8.7955 12 11.1295 10.0875 11.7974 7.5H10.2364C9.62101 9.2475 7.95497 10.5 5.99625 10.5C3.51219 10.5 1.49343 8.4825 1.49343 6C1.49343 3.5175 3.51219 1.5 5.99625 1.5C7.24203 1.5 8.35272 2.0175 9.16323 2.835L6.74672 5.25H12V0L10.2364 1.7625Z" fill="white"/>
                            </svg>
                            NOVA PARTIDA
                        </button>
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default LedNumber;