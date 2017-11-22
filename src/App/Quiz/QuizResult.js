import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../Box';
import getPercent from '../../lib/helpers/getPercent';
import Button, { ButtonInABox, LinkInABox } from '../Buttons.js';

const QuizResult = ({ numCorrectAnswers, numTotalAnswers, theme, showReview, resetQuiz }) => (
  <div className="vh-100 flex items-center justify-center">
    <Box className="w-90 mw8 center" theme={theme}>
      <div className="flex flex-wrap items-center pa4">
        <Grade className="w-50">{`${getPercent(numCorrectAnswers, numTotalAnswers)}%`}</Grade>
        <div className="w-50">
          <p>{`${numCorrectAnswers}/${numTotalAnswers} Methods Correct`}</p>
          <Button underline theme={theme} onClick={showReview}>
            Review Missed Methods
          </Button>
        </div>
      </div>
      <div className="flex">
        <ButtonInABox theme={theme} onClick={resetQuiz}>
          Try Again
        </ButtonInABox>
        <LinkInABox theme={theme} primary to="/">
          Main Menu
        </LinkInABox>
      </div>
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

const Grade = styled.h1`
  font-size: 10vw;
  text-align: center;
  margin: 0;
`;
