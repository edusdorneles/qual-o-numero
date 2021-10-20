import React from 'react';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import MainNumber from './components/MainNumber/MainNumber';

import './App.css';

function App() {
  return (
    <div className="general-container">
      <Layout>
        <Header />
        
        <MainNumber /> {/* Componente onde fica o número da resposta */}
      </Layout>
    </div>
  );
}

export default App;