import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './profile';

import data from './data.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="profiles">
          {
            data.map((person) => (
              <Profile person={person} key={person.userName} />
            ))
          }
        </div>
      </header>
    </div>
  );
}

export default App;
