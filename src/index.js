import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalProvider } from './providers/Global';

ReactDOM.render(
  // Passando o context para toda a aplicação.
  <GlobalProvider> 
    <App />
  </GlobalProvider>,
  document.getElementById('root')
);