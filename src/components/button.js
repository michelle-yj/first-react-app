import React from 'react';
import './button.css';

const Button =  ({ children, link, color, size }) => (
  <a href={link} className={`button button-${color} button-${size}`}>{children}</a>
);

export default Button;
