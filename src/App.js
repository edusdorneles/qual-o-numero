import React from 'react';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import LedNumber from './components/LedNumber/LedNumber';
import Input from './components/Input/Input';

import './App.css';

function App() {
  return(
    <Layout>
      <Header />

      <LedNumber />

      <Input />
    </Layout>
  );
}

export default App;