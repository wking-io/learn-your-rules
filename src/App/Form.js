import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import MultipleChoiceForm from './MultipleChoiceForm';
import TrueFalseForm from './TrueFalseForm';
import FillInTheBlankForm from './FillInTheBlankForm';
import makeBool from '../lib/helpers/makeBool';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ answer: e.target.value });
  };

  handleChangeTrueFalse = e => {
    e.preventDefault();
    const value = makeBool(e.target.value);
    this.setState({ answer: value });
  };

  handleSubmit = check => e => {
    e.preventDefault();
    const { answer } = this.state;
    const isCorrect = check(answer);
    console.log(isCorrect);
    return {
      answer,
      isCorrect,
    };
  };

  handleClick = check => answer => e => {
    e.preventDefault();
    const isCorrect = check(answer);
    console.log(isCorrect);
    return {
      answer,
      isCorrect,
    };
  };

  checkAnswer = method => answer => method === answer;
  checkTrueFalse = (method, trueFalseAnswer) => answer => {
    return this.checkAnswer(method)(trueFalseAnswer) === answer;
  };

  render() {
    const { quizId, answers, showSubmit, method, trueFalseMethod } = this.props;
    const { answer } = this.state;
    const loadedCheck = this.checkAnswer(method.name);
    const loadedCheckTrueFalse = this.checkTrueFalse(method.name, trueFalseMethod);
    return quizId === 'multiple-choice' ? (
      <MultipleChoiceForm
        answers={answers}
        isDisabled={answer.length <= 0}
        showSubmit={showSubmit}
        handleChange={this.handleChange}
        handleClick={this.handleClick(loadedCheck)}
        handleSubmit={this.handleSubmit(loadedCheck)}
      />
    ) : quizId === 'true-false' ? (
      <TrueFalseForm
        answers={answers}
        isDisabled={answer.length <= 0}
        showSubmit={showSubmit}
        handleChange={this.handleChangeTrueFalse}
        handleClick={this.handleClick(loadedCheckTrueFalse)}
        handleSubmit={this.handleSubmit(loadedCheckTrueFalse)}
      />
    ) : (
      <FillInTheBlankForm
        answer={this.state.answer}
        isDisabled={answer.length <= 0}
        showSubmit={showSubmit}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit(loadedCheck)}
      />
    );
  }
}

Form.propTypes = {
  answers: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]).isRequired,
  showSubmit: PropTypes.bool.isRequired,
};
