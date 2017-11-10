import React, { Component } from 'react';
import update from 'immutability-helper';
import Question from './Question';
import { getMethodCount, getMethod } from '../lib/data/methods';
import { getQuizName } from '../lib/data/quizTypes';

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
    };
  }

  submitAnswer = answer => {
    this.setState(prevState =>
      update(prevState, {
        answers: { $push: [answer] },
      })
    );
  };

  render() {
    const { answers } = this.state;
    const { objectId, quizId } = this.props.match.params;
    const isComplete = answers.length === getMethodCount(objectId);
    return isComplete ? (
      <div>complete</div>
    ) : (
      <div className="ba bw1 w-90 mw8 center">
        <header className="flex justify-between pl3 pr3 bb">
          <p className="">{getQuizName(quizId)}</p>
          <p className="">
            {answers.length + 1}/{getMethodCount(objectId)}
          </p>
        </header>
        <Question
          objectId={objectId}
          quizId={quizId}
          method={getMethod(objectId, answers)}
          submitAnswer={this.submitAnswer}
        />
      </div>
    );
  }
}
