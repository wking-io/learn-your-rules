import React, { Component } from 'react';
import update from 'immutability-helper';
import sample from 'lodash.sample';
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
    const answeredMethods = [];
    const allMethodNames = unansweredMethods.map(method => method.name);

    return {
      quizType,
      unansweredMethods,
      answeredMethods,
      allMethodNames,
    };
  }

  getQuestion = () => {
    const { unansweredMethods } = this.state;
    const method = sample(unansweredMethods);
    return method;
  };

  submitAnswer = answer => {
    const answerIndex = this.state.unansweredMethods.find(method => method.name === answer.name);
    this.setState(
      update(this.state, {
        unansweredMethods: { $splice: [[answerIndex, 1]] },
        answeredMethods: { $push: [answer] },
      })
    );
  };

  render() {
    const {
      unansweredMethods,
      allMethodNames,
      quizType: { name, questionTitle, id, showSubmit },
    } = this.state;
    const method = sample(unansweredMethods);
    const otherMethods = allMethodNames.filter(item => item !== method.name);
    return (
      <div className="ba bw1 w-90 mw8 center">
        <header className="flex justify-between pl3 pr3 bb">
          <p className="">{name}</p>
          <p className="">1/{allMethodNames.length}</p>
        </header>
        <Question
          questionTitle={questionTitle}
          questionType={id}
          showSubmit={showSubmit}
          method={method}
          otherMethods={otherMethods}
          submitAnswer={this.submitAnswer}
        />
      </div>
    );
  }
}
