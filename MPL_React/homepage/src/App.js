import React from 'react';
import Navbar from './navbar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Bem-vindo à Homepage</h1>
        <p>Esta é a página inicial do meu site.</p>
      </header>
      <div>
      <h1>Conteúdo da Págine</h1>
    </div>
    </div>
  );
}

export default App;