import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RadioAnswer = ({ method, index }) => (
  <FancyRadio className="w-50">
    <input type="radio" value={method} name="answer" id={`answer-${index}`} />
    <label className="pl3 pr3 pt3 pb3 db" htmlFor={`answer-${index}`}>{`Array.${method}()`}</label>
  </FancyRadio>
);

RadioAnswer.propTypes = {
  method: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
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
    background-color: black;
    color: white;
  }

  > label {
    border-top: 1px solid black;
  }

  :nth-child(2n) > label {
    border-left: 1px solid black;
  }
`;
