import styled, { css } from 'styled-components';
import { primary } from '../../../lib/colors';

const QuizSubmit = styled.input`
  background-color: ${props => (props.theme ? props.theme : primary)};
  color: white;
  border: none;

  :hover {
    cursor: pointer;
  }

  :disabled {
    opacity: 0.5;
    cursor: default;
  }

  ${props =>
    props.visible ||
    css`
      position: absolute;
      left: -9999px;
    `} :disabled {
    background-color: rgba(${props => (props.theme ? props.theme : primary)}, 0.5);
  }
`;

export default QuizSubmit;
