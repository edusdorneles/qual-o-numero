import React from 'react';
import Header from './components/Header/Header';
import LedContainer from './components/LedContainer/LedContainer';
import Input from './components/Input/Input';

// Styles
import './App.css';

function App() {
  return(
    <div className="container">
      <Header />

      <LedContainer />

      <Input />
    </div>
  );
}

export default App;