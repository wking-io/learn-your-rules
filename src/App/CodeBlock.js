import styled from 'styled-components';
import { transparentize } from 'polished';
import { primary } from '../lib/colors';
import { monospace } from '../lib/fonts';

const CodeBlock = styled.pre`
  line-height: 1.6;
  background-color: ${transparentize(0.95, primary)};
  white-space: pre-wrap;
  font-family: ${monospace};
  padding: 4rem;
  margin: 4rem 0 0;

  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

export default CodeBlock;
