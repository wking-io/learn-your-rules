import styled from 'styled-components';
import { primary } from '../../lib/colors';

const QuizHeader = styled.header`
  border-color: ${props => (props.theme ? props.theme : primary)};
`;

export default QuizHeader;
