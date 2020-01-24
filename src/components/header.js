import React from 'react';
import styled from 'styled-components';
import { baseSpacer, doubleSpacer, quadrupleSpacer } from '../sizes';

const StyledH1 = styled.h1`
    color: ${props => props.color ? props.color : 'yellow'};
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
