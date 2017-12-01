import React from 'react';

const QuizReview = ({ missedAnswers }) => (
  <div>
    {missedAnswers.map(answer => (
      <div key={answer.id}>
        <p>{answer.id}</p>
        <p>{answer.correctAnswer}</p>
        <p>{answer.submittedAnswer}</p>
        <p>{answer.question}</p>
      </div>
    ))}
  </div>
);

export default QuizReview;
