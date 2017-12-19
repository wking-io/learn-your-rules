import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { primary } from '../../../lib/colors';

const QuizSubmit = styled.input`
  width: 100%;
  padding: 4rem;
  background-color: ${primary};
  color: white;
  border: none;

  :hover {
    cursor: pointer;
  }

  :disabled {
    opacity: 0.5;
    cursor: default;
  }

  ${({ visible }) =>
    visible ||
    css`
      position: absolute;
      left: -9999px;
    `} :disabled {
    background-color: ${transparentize(0.75, primary)};
  }
`;

export default QuizSubmit;
