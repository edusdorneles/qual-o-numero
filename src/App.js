import React from 'react';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';

import './App.css';

function App() {
  return (
    <div className="general-container">
      <Layout>
        <Header />
      </Layout>
    </div>
  );
}

export default App;