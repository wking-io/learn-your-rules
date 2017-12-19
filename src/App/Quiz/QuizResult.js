import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../Box';
import getPercent from '../../lib/helpers/getPercent';
import { ButtonInABox, LinkInABox, UnderlineButton } from '../Buttons.js';

const QuizResult = ({ numCorrectAnswers, numTotalAnswers, showReview, resetQuiz }) => (
  <div className="vh-100 flex items-center justify-center">
    <Box>
      <div className="flex flex-wrap items-center pa4">
        <Grade className="w-50">{`${getPercent(numCorrectAnswers, numTotalAnswers)}%`}</Grade>
        <div className="w-50">
          <p>{`${numCorrectAnswers}/${numTotalAnswers} Methods Correct`}</p>
          <UnderlineButton onClick={showReview}>Review Missed Methods</UnderlineButton>
        </div>
      </div>
      <div className="flex">
        <ButtonInABox onClick={resetQuiz}>Try Again</ButtonInABox>
        <LinkInABox to="/">Main Menu</LinkInABox>
      </div>
    </Box>
  </div>
);

QuizResult.propTypes = {
  numCorrectAnswers: PropTypes.number.isRequired,
  numTotalAnswers: PropTypes.number.isRequired,
  resetQuiz: PropTypes.func.isRequired,
  showReview: PropTypes.func.isRequired,
};

export default QuizResult;

const Grade = styled.h1`
  font-size: 10vw;
  text-align: center;
  margin: 0;
`;
