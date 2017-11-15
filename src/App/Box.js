import React from 'react';
import styled from 'styled-components';
import { primary } from '../lib/colors';

const Box = ({ children, theme, className }) => (
  <FancyBox className={`ba bw1 ${className}`} theme={theme}>
    {children}
  </FancyBox>
);

export default Box;

const FancyBox = styled.div`
  border-color: ${props => (props.theme ? props.theme : primary)};
`;
