import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet'

import Title from './title.js'
import Entry from './entry.js'

const TITLE = 'Junkaltxorraren bila'

function App() {
  return (
    <>
      <Helmet>
        <title>{ TITLE }</title>
        <meta name="description" content="Altxorraren bila apirilak 24, 2020" />
      </Helmet>

      <div className="App">
        <header className="App-header">
          <Title/>
          <Entry/>
          <p style={{"font-size": 10}}>en minusculas pls</p>
        </header>
      </div>
    </>
  );
}

export default App;
