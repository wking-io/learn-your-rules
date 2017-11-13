import styled, { css } from 'styled-components';

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

export default QuizSubmit;
