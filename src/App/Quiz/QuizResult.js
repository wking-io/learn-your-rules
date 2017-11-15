import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import getPercent from '../../lib/helpers/getPercent';
import { Link } from 'react-router-dom';

const QuizResult = ({ numCorrectAnswers, numTotalAnswers, theme, showReview, resetQuiz }) => (
  <div className="vh-100 flex items-center justify-center">
    <Box className="w-90 mw8 center" theme={theme}>
      <p>{`${getPercent(numCorrectAnswers, numTotalAnswers)}%`}</p>
      <p>{`${numCorrectAnswers}/${numTotalAnswers} Correct`}</p>
      <a onClick={showReview}>Review Missed Methods</a>
      <button onClick={resetQuiz}>Try Again</button>
      <Link to="/">Main Menu</Link>
    </Box>
  </div>
);

QuizResult.propTypes = {
  numCorrectAnswers: PropTypes.number.isRequired,
  numTotalAnswers: PropTypes.number.isRequired,
  showReview: PropTypes.func.isRequired,
  restartQuiz: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

QuizResult.defaultProps = {
  missedAnswers: {},
};

export default QuizResult;
