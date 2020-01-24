import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header';
import Button from '../components/Button';
import { secondaryGrey, paleGreen, paleWhite } from '../colors';
import { doubleSpacer, baseSpacer, quadrupleSpacer } from '../sizes';

const StyledLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  display: block;
  width: 300px;
  height: ${doubleSpacer};
  padding: ${baseSpacer};
  font-size: ${baseSpacer};
  color: ${secondaryGrey};
  background-color: ${paleWhite};
  background-image: none;
  border: 3px solid ${paleGreen};
  border-radius: ${quadrupleSpacer};
  transition: border-color .2s ease-in-out;
  margin-bottom: ${baseSpacer};

  &:focus {
    border-color: ${secondaryGrey};
    outline: 0;
    box-shadow: 0 0 0 ${quadrupleSpacer} rgba(${secondaryGrey},.25);
  }
`;

class Login extends Component {
  state = {
    isLoggedIn: false,
  }

  login = () => {
    this.setState({
      isLoggedIn: true,
    });
  }

  render(props) {
    if (this.state.isLoggedIn) {
      return <Redirect to="/home" />
    }
    return (
      <StyledLoginWrapper>
        <Header color={secondaryGrey}>Welcome</Header>
        <Header color={secondaryGrey}>My First React App</Header>
        <StyledInput type="text" />
        <StyledInput type="password" />
        <Button size="large" color={paleGreen} onClick={() => this.login()}>Log In</Button>
      </StyledLoginWrapper>
    );
  }
}

export default Login;
