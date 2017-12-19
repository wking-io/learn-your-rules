import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MultipleChoiceForm from './MultipleChoiceForm';
import TrueFalseForm from './TrueFalseForm';
import FillInTheBlankForm from './FillInTheBlankForm';
import makeBool from '../../../lib/helpers/makeBool';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
    };
  }

  componentDidMount() {
    this.input && this.input.focus();
  }

  componentDidUpdate() {
    this.input && this.input.focus();
  }

  handleChange = e => {
    e.preventDefault();
    e.target.autocomplete = 'off';
    this.setState({ answer: e.target.value });
  };

  handleChangeTrueFalse = e => {
    e.preventDefault();
    const value = makeBool(e.target.value);
    this.setState({ answer: value });
  };

  checkAnswer = (correctAnswer, answer) => correctAnswer === answer;
  getCorrectAnswer = (randomMethod, method) => (randomMethod ? randomMethod === method : method);

  buildAnswer = (method, randomMethod, submittedAnswer, question) => {
    const correctAnswer = this.getCorrectAnswer(randomMethod, method);
    const isCorrect = this.checkAnswer(correctAnswer, submittedAnswer);
    return {
      id: method,
      correctAnswer,
      submittedAnswer,
      isCorrect,
      question,
    };
  };

  handleSubmit = (input = false) => e => {
    e.preventDefault();
    const { answer } = this.state;
    const { submitAnswer, method, question, randomMethod } = this.props;
    const answerObj = this.buildAnswer(method, randomMethod, answer, question);
    submitAnswer(answerObj);
    this.setState({ answer: '' });
  };

  handleClick = answer => e => {
    e.preventDefault();
    const { submitAnswer, method, question, randomMethod } = this.props;
    const answerObj = this.buildAnswer(method, randomMethod, answer, question);
    submitAnswer(answerObj);
    this.setState({ answer: '' });
  };

  setInputRef = ref => (this.input = ref);

  render() {
    const { quizId, options, showSubmit, theme } = this.props;
    const { answer } = this.state;
    return quizId === 'multiple-choice' ? (
      <MultipleChoiceForm
        answers={options}
        isDisabled={answer.length <= 0}
        showSubmit={showSubmit}
        theme={theme}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        handleSubmit={this.handleSubmit}
      />
    ) : quizId === 'true-false' ? (
      <TrueFalseForm
        answers={options}
        isDisabled={answer.length <= 0}
        showSubmit={showSubmit}
        theme={theme}
        handleChange={this.handleChangeTrueFalse}
        handleClick={this.handleClick}
        handleSubmit={this.handleSubmit}
      />
    ) : (
      <FillInTheBlankForm
        answer={this.state.answer}
        isDisabled={answer.length <= 0}
        showSubmit={showSubmit}
        theme={theme}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        setInputRef={this.setInputRef}
      />
    );
  }
}

Form.propTypes = {
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]).isRequired,
  showSubmit: PropTypes.bool.isRequired,
  randomMethod: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  method: PropTypes.string.isRequired,
};
