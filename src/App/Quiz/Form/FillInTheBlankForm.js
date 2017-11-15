import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transparentize } from 'polished';
import QuizSubmit from './QuizSubmit';
import { primary } from '../../../lib/colors';

const FillInTheBlankForm = ({
  isDisabled,
  showSubmit,
  theme,
  answer,
  handleChange,
  handleSubmit,
  setInputRef,
}) => (
  <form className="flex flex-wrap" onSubmit={handleSubmit(this.input)}>
    <InputAnswer
      name="answer"
      id="answer"
      placeholder="Enter answer here..."
      onChange={handleChange}
      theme={theme}
      value={answer}
      innerRef={input => setInputRef(input)}
      className="ba0 pl3 pr3 pt3 pb3 ml3 mr3 mb3 w-100"
    />
    <QuizSubmit
      type="submit"
      value="Submit Answer"
      className="w-100 pl3 pr3 pt3 pb3"
      visible={showSubmit}
      disabled={isDisabled}
      theme={theme}
    />
  </form>
);

export default FillInTheBlankForm;

FillInTheBlankForm.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  showSubmit: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const InputAnswer = styled.input`
  border-style: solid;
  border-color: ${transparentize(0.75, primary)};
  color: ${primary};

  :focus {
    border-color: ${props => (props.theme ? props.theme : primary)};
    outline: none;
  }
`;
