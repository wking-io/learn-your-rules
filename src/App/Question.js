import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sample from 'lodash.sample';
import sampleSize from 'lodash.samplesize';
import shuffle from 'lodash.shuffle';
import Form from './Form';
import getSampleSolo from '../lib/helpers/getSampleSolo';

const Question = ({
  questionTitle,
  questionType,
  showSubmit,
  method,
  otherMethods,
  submitAnswer,
}) => {
  const question = sample(method.questions);
  const getAnswers = () => {
    if (questionType === 'mc') {
      return shuffle([method.name, ...sampleSize(otherMethods, 3)]);
    } else if (questionType === 'tf') {
      return ['True', 'False'];
    } else {
      return false;
    }
  };
  const answers = getAnswers(questionType);
  const trueFalseMethod =
    questionType === 'tf' ? getSampleSolo([method.name, otherMethods]) : false;
  return (
    <main>
      <section className="pa3">
        <h1 className="f3 mt1">{questionTitle}</h1>
        <CodeBlock className="pa3 mb1">
          {trueFalseMethod ? question(trueFalseMethod) : question()}
        </CodeBlock>
      </section>
      <Form
        answers={answers}
        showSubmit={showSubmit}
        questionType={questionType}
        submitAnswer={submitAnswer}
      />
    </main>
  );
};

Question.propTypes = {
  questionTitle: PropTypes.string.isRequired,
  questionType: PropTypes.string.isRequired,
  showSubmit: PropTypes.bool.isRequired,
};

export default Question;

const CodeBlock = styled.pre`
  line-height: 1.6;
  background-color: #eee;
  white-space: pre-wrap;
`;
