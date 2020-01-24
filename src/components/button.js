import React from 'react';
import styled from 'styled-components';
import { halfSpacer, baseSpacer, doubleSpacer } from '../sizes';

const StyledButton = styled.button`
    color: ${props => props.color ? props.color : 'red'};
    font-family: 'Quicksand', 'Montserrat';
    letter-spacing: ${halfSpacer};
    text-align: center;
    ${props => props.size === 'small' && `padding: ${baseSpacer} ${halfSpacer}; margin: ${baseSpacer}; font-size: 18px`};
    ${props => props.size === 'large' && `padding: ${baseSpacer} ${baseSpacer}; margin: ${doubleSpacer}; font-size: 22px;`};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'yellow'};
    border-style: none;
    border-radius: 7px;
    width: ${props => props.block ? '100%' : 'initial'};
    ${props => props.disabled && `opacity: .1; cursor: not-allowed`}
`;

const Button = ({ children, size, color, backgroundColor, block, disabled, onClick }) => (
  <StyledButton
      size={size}
      color={color}
      backgroundColor={backgroundColor}
      block={block}
      disabled={disabled}
      onClick={onClick}
    >{children}</StyledButton>
);

export default Button;
