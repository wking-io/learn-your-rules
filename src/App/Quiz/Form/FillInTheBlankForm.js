import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transparentize } from 'polished';
import QuizSubmit from './QuizSubmit';
import { primary } from '../../../lib/colors';
import autocompleteOff from '../../../lib/helpers/autocompleteOff';

const FillInTheBlankForm = ({
  answer,
  handleChange,
  handleSubmit,
  isDisabled,
  setInputRef,
  showSubmit,
}) => (
  <form className="flex flex-wrap" onSubmit={handleSubmit(this.input)}>
    <InputAnswer
      autoComplete="answer"
      id="answer"
      innerRef={setInputRef}
      name="answer"
      onChange={handleChange}
      onFocus={autocompleteOff}
      placeholder="Enter answer here..."
      type="text"
      value={answer}
    />
    <QuizSubmit disabled={isDisabled} type="submit" value="Submit Answer" visible={showSubmit} />
  </form>
);

export default FillInTheBlankForm;

FillInTheBlankForm.propTypes = {
  answer: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  setInputRef: PropTypes.func.isRequired,
  showSubmit: PropTypes.bool.isRequired,
};

FillInTheBlankForm.defaultProps = {
  answer: '',
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
