import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transparentize } from 'polished';
import QuizSubmit from './QuizSubmit';
import { primary } from '../../../lib/colors';

const FillInTheBlankForm = ({
  isDisabled,
  showSubmit,
  answer,
  handleChange,
  handleSubmit,
  setInputRef,
}) => (
  <form className="flex flex-wrap" onSubmit={handleSubmit(this.input)}>
    <input type="hidden" value="something" />
    <InputAnswer
      type="text"
      name="answer"
      id="answer"
      placeholder="Enter answer here..."
      onChange={handleChange}
      value={answer}
      autoComplete="answer"
      innerRef={input => setInputRef(input)}
    />
    <QuizSubmit type="submit" value="Submit Answer" visible={showSubmit} disabled={isDisabled} />
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
  width: 100%;
  border: 0.5rem solid ${transparentize(0.75, primary)};
  padding: 4rem;
  margin: 0 6rem 4rem;
  color: ${primary};

  :focus {
    border-color: ${primary};
    outline: none;
  }
`;
