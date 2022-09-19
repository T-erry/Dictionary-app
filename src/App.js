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
        <Dictionary defaultKeyword="coffee"/>
      </main>
      
      <footer className='App-footer'>
      This project is open-sourced on
      <a href='https://github.com/T-erry/dictionary-app' target="_blank" rel="noopener noreferrer">GitHub</a>
       and hosted on
       <a href='https://bespoke-empanada-b2414d.netlify.app/' target="_blank" rel="noopener noreferrer">Netlify</a>
       
      </footer>
    
      </div>
    </div>
  );
}

export default App;
