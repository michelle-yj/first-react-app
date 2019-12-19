import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './profile/profile';
import data from './data.json';
import Button from '././components/button';
import '././components/button.css';
import Header from '././components/header';
import '././components/header.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="nav-buttons">
        <Button link="#" color="lightyellow" size="small">Home</Button>
        <Button link="#" color="lightcoral" size="small">About</Button>
        <Button link="#" color="tan" size="small">Services</Button>
      </div>
        <img src={logo} className="App-logo" alt="logo" />
          {
            <Header className="header">My First React App!</Header>
          }
        <div className="profiles">
          {
            data.map((person) => (
              <Profile person={person} key={person.userName} />
            ))
          }
        </div>
        <div className="button">
        {
            <Button link="#" size="large">Log In</Button>
        }
        </div>
      </header>
    </div>
  );
}

export default App;
