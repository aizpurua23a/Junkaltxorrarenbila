import React from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './title.js'
import Entry from './entry.js'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <Entry/>
        <p style={{"font-size": 10}}>en minusculas pls</p>
      </header>
    </div>
  );
}

export default App;
