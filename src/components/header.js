import React from 'react';
import styled from 'styled-components';
import { baseSpacer, doubleSpacer, quadrupleSpacer } from '../sizes';
import { secondaryGrey } from '../colors';

const StyledH1 = styled.h1`
    text-decoration: none;
    color: ${secondaryGrey};
    font-size: ${quadrupleSpacer};
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    letter-spacing: ${baseSpacer};
    margin-left: ${doubleSpacer};
    margin-right: ${baseSpacer};
  }

  @media screen and (min-width: 700px) {
      font-size: 30px;
    }

  @media screen and (min-width: 1000px) {
      font-size: ${quadrupleSpacer};
    }
`;

const Header =  ({ children, color, size}) => (
  <StyledH1 color={color} size={size}>{children}</StyledH1>
);

export default Header;
