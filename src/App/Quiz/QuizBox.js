import React from 'react';
import PropTypes from 'prop-types';
import AlmostCenter from '../AlmostCenter';
import Box from '../Box';
import GetQuestion from './GetQuestion';
import Question from './Question';
import CodeBlock from './CodeBlock';
import QuizHeader from './QuizHeader';
import SubHeading from '../SubHeading';
import Copy from '../Copy';
import Form from './Form';
import setupQuizObject from '../../lib/data/methods';
import { getQuizName, getQuizQuestionTitle, getQuizShowSubmit } from '../../lib/data/quizTypes';

const QuizBox = ({ objectId, quizId, answers, submitAnswer }) => {
  const quiz = setupQuizObject(objectId);
  const method = quiz.getNextMethod(answers);
  const quizName = getQuizName(quizId);
  const quizProgress = `${answers.length + 1}/${quiz.methods.length}`;
  const questionTitle = getQuizQuestionTitle(quizId);

  return (
    <AlmostCenter>
      <Box>
        <QuizHeader className="flex justify-between">
          <Copy noSpace>{quizName}</Copy>
          <Copy noSpace>{quizProgress}</Copy>
        </QuizHeader>
        <GetQuestion
          objectId={objectId}
          quizId={quizId}
          method={method}
          render={({ question, options, randomMethod }) => (
            <main>
              <Question>
                <SubHeading noSpace>{questionTitle}</SubHeading>
                <CodeBlock>{randomMethod ? question(randomMethod) : question()}</CodeBlock>
              </Question>
              <Form
                method={method.name}
                randomMethod={randomMethod}
                options={options}
                showSubmit={getQuizShowSubmit(quizId)}
                quizId={quizId}
                submitAnswer={submitAnswer}
                question={randomMethod ? question(randomMethod) : question()}
              />
            </main>
          )}
        />
      </Box>
    </AlmostCenter>
  );
};

QuizBox.propTypes = {
  objectId: PropTypes.string.isRequired,
  quizId: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  submitAnswer: PropTypes.func.isRequired,
};

export default QuizBox;
