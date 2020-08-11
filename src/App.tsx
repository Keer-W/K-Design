import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const a = '123'
  if(a == '123') {
    console.log('k')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Keer</h1>
      </header>
    </div>
  );
}

export default App;
