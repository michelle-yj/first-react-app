import React from 'react';
import styled from 'styled-components';
import { baseSpacer, doubleSpacer, quadrupleSpacer } from '../sizes';

const StyledFooter = styled.div`
    margin-top: ${quadrupleSpacer};
    height: ${quadrupleSpacer};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'yellow'};
    color: ${props => props.color ? props.color : 'red'};
    letter-spacing: 2px;
    font-size: 12px;
    padding-top: ${baseSpacer};
    padding-right: ${doubleSpacer};
    text-align: right;
`;
const Footer = ( {children, color, backgroundColor} ) => (
  <StyledFooter backgroundColor={backgroundColor} color={color}>{children}</StyledFooter>
);

export default Footer;
