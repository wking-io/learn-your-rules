import React from 'react';
import PropTypes from 'prop-types';

const QuizProgress = ({ progress, total }) => (
  <p>
    {progress}/{total}
  </p>
);

QuizProgress.propTypes = {
  progress: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
export default QuizProgress;
