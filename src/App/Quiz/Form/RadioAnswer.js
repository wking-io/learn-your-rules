import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { primary } from '../../../lib/colors';

const RadioAnswer = ({ method, index, theme, isBool, handleChange, handleClick }) => (
  <FancyRadio className="w-50" theme={theme}>
    <input
      type="radio"
      value={isBool ? !index : method}
      name="answer"
      id={`answer-${method}`}
      onChange={handleChange}
      onFocus={handleChange}
    />
    <label
      className="db"
      htmlFor={`answer-${method}`}
      onClick={isBool ? handleClick(!index) : handleClick(method)}
    >
      {isBool ? method : `Array.${method}()`}
    </label>
  </FancyRadio>
);

RadioAnswer.propTypes = {
  method: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isBool: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default RadioAnswer;

const FancyRadio = styled.div`
  > input[type='radio'] {
    position: absolute;
    left: -9999px;
  }

  > input[type='radio']:checked + label,
  > input[type='radio']:focus + label,
  > input[type='radio']:active + label,
  :hover > label {
    background-color: ${primary};
    color: white;
  }

  > label {
    border-top: 1px solid ${primary};
    padding: 4rem;
  }

  :nth-child(2n) > label {
    border-left: 1px solid ${primary};
  }
`;
