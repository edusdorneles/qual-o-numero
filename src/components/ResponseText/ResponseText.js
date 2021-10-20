import React from 'react'
import { useGlobal } from '../../providers/Global';

// Style 
import './styles.css';

const MainNumber = () => {
    const { errorExist } = useGlobal();

    return (
        <div className="response-text-container">
            <h4 className="response-text-response">
                { errorExist ? 'ERRO' : '' }
            </h4>
        </div>
    )
}

export default MainNumber;