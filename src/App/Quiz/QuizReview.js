import React from 'react';
import styled from 'styled-components';
import NumberedHeader from '../NumberedHeader';
import CodeBlock from '../CodeBlock';
import { UnderlineLink } from '../Buttons';
import Copy from '../Copy';

const QuizReview = ({ missedAnswers, objectId, quizId }) => (
  <ul className="list pa0">
    {missedAnswers.map((answer, index) => (
      <ReviewItem key={answer.id}>
        <NumberedHeader number={index} />
        <div className="flex flex-wrap mt5 mb6">
          <div className="w-50">
            <Copy noSpace>Your Answer:</Copy>
            {quizId === 'true-false' ? (
              <UnderlineLink to={`/study-guide/${objectId}/#${answer.id}`} large proper>
                {answer.submittedAnswer.toString()}
              </UnderlineLink>
            ) : (
              <UnderlineLink
                to={`/study-guide/${objectId}/#${answer.submittedAnswer}`}
                large
                proper
              >
                {answer.submittedAnswer}
              </UnderlineLink>
            )}
          </div>
          <div className="w-50">
            <Copy noSpace>Correct Answer:</Copy>
            {quizId === 'true-false' ? (
              <UnderlineLink to={`/study-guide/${objectId}/#${answer.id}`} large proper>
                {answer.correctAnswer.toString()}
              </UnderlineLink>
            ) : (
              <UnderlineLink to={`/study-guide/${objectId}/#${answer.correctAnswer}`} large proper>
                {answer.submittedAnswer}
              </UnderlineLink>
            )}
          </div>
        </div>
        <CodeBlock>{answer.question}</CodeBlock>
      </ReviewItem>
    ))}
  </ul>
);

const ReviewItem = styled.li`
  margin-bottom: 12rem;
`;

export default QuizReview;
