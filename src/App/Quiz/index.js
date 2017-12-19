import React, { Component } from 'react';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import storage from 'store';
import QuizBox from './QuizBox';
import QuizResult from './QuizResult';
import QuizReview from './QuizReview';
import setupMethods from '../../lib/data/methods';
import mapProp from '../../lib/helpers/mapProp';

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    const answers = this.getAnswers();
    this.state = {
      answers: answers || [],
      showReview: false,
    };
  }

  componentDidUpdate() {
    const { answers } = this.state;
    this.updateAnswers(answers);
  }

  componentWillUnmount() {
    this.deleteAnswers();
  }

  updateAnswers = answers => storage.set('answers', answers);
  getAnswers = () => storage.get('answers');
  deleteAnswers = () => storage.remove('answers');

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
    const quiz = setupMethods(objectId);
    const getIds = mapProp('id');
    const missedAnswers = answers.filter(answer => !answer.isCorrect);
    const numCorrectAnswers = answers.filter(answer => answer.isCorrect).length;
    const isComplete = answers.length === quiz.methods.length;
    return showReview ? (
      <QuizReview {...this.props.match.params} missedAnswers={missedAnswers} />
    ) : isComplete ? (
      <QuizResult
        numCorrectAnswers={numCorrectAnswers}
        numTotalAnswers={answers.length}
        resetQuiz={this.resetQuiz}
        showReview={this.showReview}
      />
    ) : (
      <QuizBox
        {...this.props.match.params}
        answers={getIds(answers)}
        submitAnswer={this.submitAnswer}
      />
    );
  }
}

Quiz.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      objectId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
