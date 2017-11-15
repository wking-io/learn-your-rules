import styled from 'styled-components';

const CodeBlock = styled.pre`
  line-height: 1.6;
  background-color: #eee;
  white-space: pre-wrap;
  font-family: 'Fira Mono', monospace;

  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

export default CodeBlock;
