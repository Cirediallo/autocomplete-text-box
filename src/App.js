import React from 'react';
import logo from './logo.svg';
import './App.css';
//import HiddableText from './HiddableText';
import AutoCompleteText from './AutoCompleteText'
import countries from './countries'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >*/}
        <p>
          Hello and Welcome to my first React App in browser!
        </p>
      </header>
      
      <div className="App-content">
        <AutoCompleteText items={countries} />
      </div>
    </div>
  );
}

export default App;
