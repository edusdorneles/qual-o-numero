import React from 'react';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import LedContainer from './components/LedContainer/LedContainer';
import Input from './components/Input/Input';

import './App.css';

function App() {
  return(
    <Layout>
      <Header />

      <LedContainer />

      <Input />
    </Layout>
  );
}

export default App;