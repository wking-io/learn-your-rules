import styled from 'styled-components';
import { condensed } from '../lib/fonts';

const SubHeading = styled.h2`
  font-size: 1.5em;
  text-transform: uppercase;
  font-family: ${condensed};
  margin: ${props => (props.noSpace ? 0 : '3rem 0 6rem')};
`;

export default SubHeading;
