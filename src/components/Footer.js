import React from 'react';
import styled from 'styled-components';
import { primaryGrey, secondaryGrey } from '../colors';
import { baseSpacer, doubleSpacer, quadrupleSpacer } from '../sizes';

const StyledFooter = styled.div`
    margin-top: ${quadrupleSpacer};
    height: ${quadrupleSpacer};
    background-color: ${primaryGrey};
    color: ${secondaryGrey};
    letter-spacing: 2px;
    font-size: 12px;
    padding-top: ${doubleSpacer};
    padding-right: ${doubleSpacer};
    text-align: right;
    width: calc(100% - ${baseSpacer});
`;
const Footer = () => (
  <StyledFooter>Copyright &copy; {new Date().getFullYear()}</StyledFooter>
);

export default Footer;
