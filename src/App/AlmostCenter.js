import styled from 'styled-components';
import { primary } from '../lib/colors';

const AlmostCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5vw 0;
  /* border-top: 4px solid ${props => (props.theme ? props.theme : primary)}; */

  @media (min-aspect-ratio: 3/5) {
    height: 90vh;
  }
`;

export default AlmostCenter;
