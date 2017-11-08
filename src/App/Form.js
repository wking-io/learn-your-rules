import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import RadioAnswer from './RadioAnswer';

const Form = ({ format, answers, showSubmit }) => (
  <form className="flex flex-wrap">
    {answers.map((answer, i) => <RadioAnswer method={answer} key={`answer-${answer}`} index={i} />)}
    <QuizSubmit
      type="submit"
      value="Submit Answer"
      className="w-100 pl3 pr3 pt3 pb3"
      visible={showSubmit}
    />
  </form>
);

export default Form;

Form.propTypes = {
  format: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  showSubmit: PropTypes.bool.isRequired,
};

const QuizSubmit = styled.input`
  background-color: black;
  color: white;
  border: none;

  ${props =>
    props.visible ||
    css`
      position: absolute;
      left: -9999px;
    `} :disabled {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
