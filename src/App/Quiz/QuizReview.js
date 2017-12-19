import React from 'react';
import styled from 'styled-components';
import NumberedHeader from '../NumberedHeader';
import CodeBlock from '../CodeBlock';
import { UnderlineLink } from '../Buttons';
import Copy from '../Copy';

const QuizReview = ({ missedAnswers, objectId, quizId }) => {
  const url = (id, method) => `/study-guide/${id}/#${method}`;
  return (
    <ul className="list pa0">
      {missedAnswers.map((answer, index) => (
        <ReviewItem key={answer.id}>
          <NumberedHeader number={index} />
          <div className="flex flex-wrap mt5 mb6">
            <div className="w-50">
              <Copy noSpace>Your Answer:</Copy>
              <UnderlineLink to={url(objectId, answer.id)} large proper>
                {quizId === 'true-false'
                  ? answer.submittedAnswer.toString()
                  : answer.submittedAnswer}
              </UnderlineLink>
            </div>
            <div className="w-50">
              <Copy noSpace>Correct Answer:</Copy>
              <UnderlineLink to={url(objectId, answer.id)} large="true" proper="true">
                {quizId === 'true-false' ? answer.correctAnswer.toString() : answer.correctAnswer}
              </UnderlineLink>
            </div>
          </div>
          <CodeBlock>{answer.question}</CodeBlock>
        </ReviewItem>
      ))}
    </ul>
  );
};

const ReviewItem = styled.li`
  margin-bottom: 12rem;
`;

export default QuizReview;
