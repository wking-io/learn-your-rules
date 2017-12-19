import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { primary } from '../../../lib/colors';

const RadioAnswer = ({ method, index, isBool, handleChange, handleClick }) => (
  <FancyRadio>
    <input
      id={`answer-${method}`}
      name="answer"
      onChange={handleChange}
      onFocus={handleChange}
      type="radio"
      value={isBool ? !index : method}
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
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isBool: PropTypes.bool.isRequired,
  method: PropTypes.string.isRequired,
};

export default RadioAnswer;

const FancyRadio = styled.div`
  width: 50%;

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
