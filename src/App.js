import React from 'react';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import ResponseText from './components/ResponseText/ResponseText';
import LedNumber from './components/LedNumber/LedNumber';

import './App.css';

function App() {
  return(
    <Layout>
      <Header />
      
      <ResponseText />

      <LedNumber />
    </Layout>    
  );
}

export default App;