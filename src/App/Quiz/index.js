import React, { Component } from 'react';
import update from 'immutability-helper';
import storage from 'store';
import QuizBox from './QuizBox';
import QuizResult from './QuizResult';
import QuizReview from './QuizReview';
import setupQuizObject from '../../lib/data/methods';
import { getQuizTheme } from '../../lib/data/objects';
import mapProp from '../../lib/helpers/mapProp';
import { primary } from '../../lib/colors';

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    const answers = this.getAnswers();
    console.log(answers);
    this.state = {
      answers: answers || [],
      showReview: false,
    };
  }

  componentDidUpdate() {
    this.updateAnswers(this.state.answers);
  }

  componentWillUnmount() {
    this.deleteAnswers();
  }

  updateAnswers = answers => storage.set('answers', answers);
  getAnswers = () => storage.get('answers');
  deleteAnswers = () => storage.remove('answers');

  componentDidMount;
  submitAnswer = answer => {
    this.setState(prevState =>
      update(prevState, {
        answers: { $push: [answer] },
      })
    );
  };

  resetQuiz = e => {
    e.preventDefault();
    this.setState(prevState =>
      update(prevState, {
        answers: { $set: [] },
        showReview: { $set: false },
      })
    );
  };

  showReview = e => {
    e.preventDefault();
    this.setState(prevState =>
      update(prevState, {
        showReview: { $set: true },
      })
    );
  };

  render() {
    const { answers, showReview } = this.state;
    const { objectId } = this.props.match.params;
    const quiz = setupQuizObject(objectId);
    const getIds = mapProp('id');
    const missedAnswers = answers.filter(answer => !answer.isCorrect);
    const numCorrectAnswers = answers.filter(answer => answer.isCorrect).length;
    const isComplete = answers.length === quiz.methods.length;
    const theme = getQuizTheme(objectId) || primary;
    return showReview ? (
      <QuizReview {...this.props.match.params} missedAnswers={missedAnswers} />
    ) : isComplete ? (
      <QuizResult
        numCorrectAnswers={numCorrectAnswers}
        numTotalAnswers={answers.length}
        resetQuiz={this.resetQuiz}
        showReview={this.showReview}
        theme={theme}
      />
    ) : (
      <QuizBox
        {...this.props.match.params}
        answers={getIds(answers)}
        submitAnswer={this.submitAnswer}
        theme={theme}
      />
    );
  }
}
