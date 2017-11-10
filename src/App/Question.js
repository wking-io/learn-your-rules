import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Form from './Form';
import { getQuestion, getMultipleChoiceAnswers, getTrueFalseMethod } from '../lib/data/methods';
import { getQuizQuestionTitle, getQuizShowSubmit } from '../lib/data/quizTypes';

const Question = ({ objectId, quizId, method, submitAnswer }) => {
  const question = getQuestion(method);
  const isMultipleChoice = quizId === 'multiple-choice';
  const isTrueFalse = quizId === 'true-false';
  const answers = isMultipleChoice
    ? getMultipleChoiceAnswers(objectId, method.name)
    : isTrueFalse ? ['True', 'False'] : false;
  const trueFalseMethod = isTrueFalse ? getTrueFalseMethod(method.name) : false;
  return (
    <main>
      <section className="pa3">
        <h1 className="f3 mt1">{getQuizQuestionTitle(quizId)}</h1>
        <CodeBlock className="pa3 mb1">
          {isTrueFalse ? question(trueFalseMethod) : question()}
        </CodeBlock>
      </section>
      <Form
        answers={answers}
        showSubmit={getQuizShowSubmit(quizId)}
        quizId={quizId}
        submitAnswer={submitAnswer}
      />
    </main>
  );
};

Question.propTypes = {
  objectId: PropTypes.string.isRequired,
  quizId: PropTypes.string.isRequired,
  method: PropTypes.shape({
    name: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(PropTypes.func).isRequired,
  }).isRequired,
  submitAnswer: PropTypes.func.isRequired,
};

export default Question;

const CodeBlock = styled.pre`
  line-height: 1.6;
  background-color: #eee;
  white-space: pre-wrap;
`;
