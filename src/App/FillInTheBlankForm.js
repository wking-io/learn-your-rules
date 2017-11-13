import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuizSubmit from './QuizSubmit';

const FillInTheBlankForm = ({ isDisabled, showSubmit, handleChange, handleSubmit }) => (
  <form className="flex flex-wrap" onSubmit={handleSubmit}>
    <InputAnswer
      name="answer"
      id="answer"
      placeholder="Enter answer here..."
      onChange={handleChange}
      className="ba0 pl3 pr3 pt3 pb3 ml3 mr3 mb3 w-100"
    />
    <QuizSubmit
      type="submit"
      value="Submit Answer"
      className="w-100 pl3 pr3 pt3 pb3"
      visible={showSubmit}
      disabled={isDisabled}
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
  border-color: black;
  color: black;
`;
