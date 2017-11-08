import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Form from './Form';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: ['map', 'filter', 'reduce', 'find'],
    };
  }
  render() {
    const { questionTitle, questionType, showSubmit } = this.props;
    const { answers } = this.state;
    return (
      <main>
        <section className="pa3">
          <h1 className="f3 mt1">{questionTitle}</h1>
          <CodeBlock className="pa3 mb1">
            {`const numbers = [2, 4, 6, 8];
  const result = numbers.___________(number => number * 2);
  // result = [4, 8, 12, 16];`}
          </CodeBlock>
        </section>
        <Form answers={answers} format={questionType} showSubmit={showSubmit} />
      </main>
    );
  }
}

Question.propTypes = {
  questionTitle: PropTypes.string.isRequired,
  questionType: PropTypes.string.isRequired,
  showSubmit: PropTypes.bool.isRequired,
};

const CodeBlock = styled.pre`
  line-height: 1.6;
  background-color: #eee;
  white-space: pre-wrap;
`;
