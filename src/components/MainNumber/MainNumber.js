import React from 'react'
import { useGlobal } from '../../providers/Global';

// Style 
import './styles.css';

const MainNumber = () => {
    const { randomNumber, errorExist } = useGlobal();

    return (
        <div className="main-number-container">
            <h4 className="main-number-response">
                { errorExist ? 'ERRO' : '' }
            </h4>

            <div className="main-number">
                { errorExist ? errorExist : randomNumber }                
            </div>
        </div>
    )
}

export default MainNumber;