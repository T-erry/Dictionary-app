import React from 'react';
import './App.css';
import Dictionary from './Dictionary';


function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className='App-header'>
        <h1>Dictionary</h1>
      </header>
      <main>
        <Dictionary defaultKeyword="happy"/>
      </main>
      <footer className='App-footer'>
      <small>coded by Terry</small>  
      </footer>
      </div>
    </div>
  );
}

export default App;
