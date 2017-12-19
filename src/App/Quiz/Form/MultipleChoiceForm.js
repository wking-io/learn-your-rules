import React from 'react';
import PropTypes from 'prop-types';
import RadioAnswer from './RadioAnswer';
import QuizSubmit from './QuizSubmit';

const MultipleChoiceForm = ({
  answers,
  handleChange,
  handleClick,
  handleSubmit,
  isDisabled,
  showSubmit,
}) => (
  <form className="flex flex-wrap" onSubmit={handleSubmit}>
    {answers.map((answer, i) => (
      <RadioAnswer
        handleChange={handleChange}
        handleClick={handleClick}
        index={i}
        isBool={false}
        key={`answer-${answer}`}
        method={answer}
      />
    ))}
    <QuizSubmit disabled={isDisabled} type="submit" value="Submit Answer" visible={showSubmit} />
  </form>
);

MultipleChoiceForm.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  showSubmit: PropTypes.bool.isRequired,
};

export default MultipleChoiceForm;
