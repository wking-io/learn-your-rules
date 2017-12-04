import styled from 'styled-components';

const Copy = styled.p`
  line-height: 1.5;
  margin: ${props => (props.noSpace ? 0 : '0 0 6rem 0')};
`;

export default Copy;
