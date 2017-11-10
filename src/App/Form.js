import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import RadioAnswer from './RadioAnswer';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
    };
  }

  handleChange = e => {
    this.setState({ answer: e.target.value });
  };

  handleRadioSubmit = e => {
    this.form.submit();
  };

  handleSubmit = e => {
    e.preventDefault();
    const submittedAnswer = {};
    this.props.submitAnswer(submittedAnswer);
  };

  render() {
    const { quizId, answers, showSubmit } = this.props;
    return (
      <form
        className="flex flex-wrap"
        onSubmit={this.handleSubmit}
        ref={form => {
          this.form = form;
        }}
      >
        {answers ? (
          answers.map((answer, i) => (
            <RadioAnswer
              method={answer}
              key={`answer-${answer}`}
              index={i}
              addWrapper={quizId === 'multiple-choice'}
              handleRadioSubmit={this.handleRadioSubmit}
            />
          ))
        ) : (
          <InputAnswer
            name="answer"
            id="answer"
            placeholder="Enter answer here..."
            onChange={this.handleChange}
            className="ba0 pl3 pr3 pt3 pb3 ml3 mr3 mb3 w-100"
          />
        )}
        <QuizSubmit
          type="submit"
          value="Submit Answer"
          className="w-100 pl3 pr3 pt3 pb3"
          visible={showSubmit}
          disabled={!this.state.answer}
        />
      </form>
    );
  }
}

Form.propTypes = {
  answers: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]).isRequired,
  showSubmit: PropTypes.bool.isRequired,
};

const QuizSubmit = styled.input`
  background-color: black;
  color: white;
  border: none;

  :disabled {
    opacity: 0.5;
  }

  ${props =>
    props.visible ||
    css`
      position: absolute;
      left: -9999px;
    `} :disabled {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const InputAnswer = styled.input`
  border-color: black;
  color: black;
`;
