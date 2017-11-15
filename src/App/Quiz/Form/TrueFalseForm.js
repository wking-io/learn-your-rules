import React from 'react';
import PropTypes from 'prop-types';
import RadioAnswer from './RadioAnswer';
import QuizSubmit from './QuizSubmit';

const TrueFalseForm = ({
  answers,
  isDisabled,
  showSubmit,
  theme,
  handleSubmit,
  handleClick,
  handleChange,
}) => (
  <form className="flex flex-wrap" onSubmit={handleSubmit}>
    {answers.map((answer, i) => (
      <RadioAnswer
        method={answer}
        key={`answer-${answer}`}
        index={i}
        isBool={true}
        theme={theme}
        handleChange={handleChange}
        handleClick={handleClick}
      />
    ))}
    <QuizSubmit
      type="submit"
      value="Submit Answer"
      className="w-100 pl3 pr3 pt3 pb3"
      theme={theme}
      visible={showSubmit}
      disabled={isDisabled}
    />
  </form>
);

TrueFalseForm.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  isDisabled: PropTypes.bool.isRequired,
  showSubmit: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TrueFalseForm;
