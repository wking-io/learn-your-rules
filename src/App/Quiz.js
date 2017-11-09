import React, { Component } from 'react';
import Question from './Question';
import { getMethod } from '../lib/data/methods';
import { getQuizType } from '../lib/data/quizTypes';

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState({ quizId: 'mc', objectKey: 'array' });
  }

  getInitialState({ quizId, objectKey }) {
    const quizType = getQuizType(quizId);
    const unansweredMethods = getMethod(objectKey);
    const answeredMethods = '';
    const allMethodNames = unansweredMethods.map(method => method.name);

    return {
      quizType,
      unansweredMethods,
      answeredMethods,
      allMethodNames,
    };
  }

  render() {
    const { allMethodNames, quizType: { name, questionTitle, id, showSubmit } } = this.state;
    return (
      <div className="ba bw1 w-90 mw8 center">
        <header className="flex justify-between pl3 pr3 bb">
          <p className="">{name}</p>
          <p className="">1/{allMethodNames.length}</p>
        </header>
        <Question questionTitle={questionTitle} questionType={id} showSubmit={showSubmit} />
      </div>
    );
  }
}
