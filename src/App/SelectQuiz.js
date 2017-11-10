import React from 'react';
import { Link } from 'react-router-dom';
import objects from '../lib/data/objects';
import quizTypes from '../lib/data/quizTypes';
import QuizIcon from './QuizIcon';

const SelectQuiz = () => {
  return (
    <div className="w-90 center">
      <h1>Choose Your Quiz Below:</h1>
      <section className="flex flex-wrap">
        {objects.map((object, i) => (
          <div className="w-third ba bw1 mr3">
            <div className="pa4">
              <h2 className="mt1 mb0">{`${i.length === 1 ? `0${i + 1}` : i + 1}. ${
                object.name
              }`}</h2>
              <p className="lh-copy mb1">{object.description}</p>
            </div>
            <ul className="list ma0 pa0">
              <li className="bt">
                <Link
                  to={`/study-guide/${object.id}`}
                  className="link black underline-hover flex items-center pa3"
                >
                  <QuizIcon className="mr3 w-10" icon="study-guide" color={object.color} />
                  Study Guide
                </Link>
              </li>
              {quizTypes.map(quiz => (
                <li className="bt">
                  <Link
                    to={`/quiz/${object.id}/${quiz.id}`}
                    className="link black underline-hover flex items-center pa3"
                  >
                    <QuizIcon className="mr3 w-10" icon={quiz.id} color={object.color} />
                    {quiz.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SelectQuiz;
