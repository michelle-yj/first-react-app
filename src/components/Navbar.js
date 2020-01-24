import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { primaryGrey } from '../colors';
import { baseSpacer } from '../sizes';

const StyledNavbar = styled.nav`
  display: flex;
  position: sticky;
  top: 0px;
  opacity: 0.8;
  width: calc(100% - ${baseSpacer});
  height: 100px;
  background-color: ${primaryGrey};
`;

const StyledLogo = styled.img`
  position: absolute;
  left: 0;
  top: 10%;
  width: 100%;
  height: 80%;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
      animation: App-logo-spin infinite 30s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Navbar = ({ backgroundColor }) => (
  <StyledNavbar backgroundColor={backgroundColor}>
      <Link to="/">
          <StyledLogo src={logo} alt="logo" />
      </Link>
  </StyledNavbar>
);

export default Navbar;
