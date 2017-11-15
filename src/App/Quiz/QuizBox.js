import React from 'react';
import PropTypes from 'prop-types';
import AlmostCenter from '../AlmostCenter';
import Box from '../Box';
import Question from './Question';
import CodeBlock from './CodeBlock';
import QuizHeader from './QuizHeader';
import QuizName from './QuizName';
import QuizProgress from './QuizProgress';
import QuestionTitle from './QuestionTitle';
import Form from './Form';
import { getMethodCount, getMethod } from '../../lib/data/methods';
import { getQuizName, getQuizQuestionTitle, getQuizShowSubmit } from '../../lib/data/quizTypes';

const QuizBox = ({ objectId, quizId, answers, theme, submitAnswer }) => {
  const method = getMethod(objectId, answers);

  return (
    <AlmostCenter theme={theme}>
      <Box className="w-90 mw8" theme={theme}>
        <QuizHeader className="flex justify-between pl3 pr3 bb" theme={theme}>
          <QuizName quizName={getQuizName(quizId)} />
          <QuizProgress progress={answers.length + 1} total={getMethodCount(objectId)} />
        </QuizHeader>
        <Question
          objectId={objectId}
          quizId={quizId}
          method={method}
          render={({ question, options, randomMethod }) => (
            <main>
              <section className="pa3">
                <QuestionTitle title={getQuizQuestionTitle(quizId)} />
                <CodeBlock className="pa3 mb1">
                  {randomMethod ? question(randomMethod) : question()}
                </CodeBlock>
              </section>
              <Form
                method={method.name}
                randomMethod={randomMethod}
                options={options}
                showSubmit={getQuizShowSubmit(quizId)}
                quizId={quizId}
                submitAnswer={submitAnswer}
                question={randomMethod ? question(randomMethod) : question()}
                theme={theme}
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
  theme: PropTypes.string.isRequired,
  submitAnswer: PropTypes.func.isRequired,
};

export default QuizBox;
