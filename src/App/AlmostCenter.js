import styled from 'styled-components';

const AlmostCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5vw 0;

  @media (min-aspect-ratio: 3/5) {
    height: 88vh;
  }
`;

export default AlmostCenter;
