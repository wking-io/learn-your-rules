import styled from 'styled-components';
import { monospace } from '../../lib/fonts';
const CodeBlock = styled.pre`
  line-height: 1.6;
  background-color: #eee;
  white-space: pre-wrap;
  font-family: ${monospace};

  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

export default CodeBlock;
