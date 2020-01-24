import React, { Component } from 'react';
import styled from 'styled-components';
import Profile from './profile/profile';
import Button from './components/Button';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import data from './data.json';
import { primaryGrey, secondaryGrey, paleGreen } from './colors';
import { halfSpacer, doubleSpacer, quadrupleSpacer } from './sizes';

const StyledApp = styled.div`
    text-align: center;
`;

const StyledAppHeader = styled.div`
    background-color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledProfiles = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Quicksand', 'Montserrat';
    width: 100%;
    margin-top: ${doubleSpacer};
    margin-bottom: ${quadrupleSpacer};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'yellow'};
    border-radius: ${halfSpacer};
    @media screen and (min-width: 700px) {
        flex-direction: row-reverse;
    }
    @media screen and (min-width: 1000px) {
        flex-direction: row;
    }
`;

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
       isLoggedIn: false,
       userName: '',
    };
  }

login = () => {
  this.setState({
      isLoggedIn: !this.state.isLoggedIn,
      userName: this.state.userName ? '' : 'Michelle',
    });
  }

visitProfile = (e, userName) => {
  e.preventDefault();
// eslint-disable-next-line
  let confirmation = confirm("Visit profile?");
    if (confirmation) {
      window.location = `/user/${userName}`;
    }
  }

render() {
  const { isLoggedIn, userName } = this.state;
  return (
    <StyledApp>
    <Navbar backgroundColor={primaryGrey}></Navbar>
      {console.log(this.state)}
      <StyledAppHeader>
      <Header color={secondaryGrey}>{userName ? `hi, ${userName}` : 'Welcome'}</Header>
      <Header color={secondaryGrey}>My first react app</Header>
      <StyledProfiles backgroundColor={paleGreen}>
          {
            data.map((person) => (
              <Profile
                person={person}
                key={person.userName}
                onClick={(e, userName) => this.visitProfile(e, person.userName)}/>
            ))
          }
        </StyledProfiles>
      <Button
          onClick={() => this.login()}
          backgroundColor={isLoggedIn ? primaryGrey : paleGreen}
          size='large'
          color={secondaryGrey}
      >
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </Button>
    </StyledAppHeader>
      <Footer backgroundColor={primaryGrey} color={secondaryGrey}>Copyright &copy; {new Date().getFullYear()}</Footer>
    </StyledApp>
    );
  }
}

export default App;
