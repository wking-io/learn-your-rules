import React, { Component } from 'react';
import Question from './Question';
import arrayMethods from '../lib/data/arrayMethods';
import quizTypes from '../lib/data/quizTypes';

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizType: quizTypes[0],
      allMethods: arrayMethods.map(method => method.name),
      unansweredMethods: arrayMethods,
      answeredMethods: '',
    };
  }

  render() {
    const {
      allMethods, quizType: {
        name, questionTitle, quizId, showSubmit,
      },
    } = this.state;
    return (
      <div className="ba bw1 w-90 mw8 center">
        <header className="flex justify-between pl3 pr3 bb">
          <p className="">{name}</p>
          <p className="">1/{allMethods.length}</p>
        </header>
        <Question questionTitle={questionTitle} questionType={quizId} showSubmit={showSubmit} />
      </div>
    );
  }
}
