import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { primary, light } from '../../lib/colors';

const NumberedHeader = ({ theme, number }) => (
  <Header theme={theme}>
    <Number theme={theme}>{number.toString().length === 1 ? `0${number + 1}` : number + 1}</Number>
  </Header>
);

NumberedHeader.propTypes = {
  number: PropTypes.number.isRequired,
  theme: PropTypes.string,
};

NumberedHeader.defaultProps = {
  theme: '',
};

export default NumberedHeader;

const Header = styled.header`
  background-image: ${({ theme }) =>
    theme === 'dark'
      ? `linear-gradient(${light}, ${light})`
      : `linear-gradient(${primary}, ${primary})`};
  background-size: 100% 1.5rem;
  background-position: 0 1rem;
  background-repeat: no-repeat;
  text-align: right;
`;

const Number = styled.span`
  line-height: 1;
  font-weight: 800;
  background-color: ${({ theme }) => (theme === 'dark' ? primary : light)};
  padding: 0 0 0 2rem;
`;
