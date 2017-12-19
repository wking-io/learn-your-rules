import styled from 'styled-components';
import { media } from '../lib/media';

const Tile = styled.div`
  margin: 0 0 16rem 0;

  ${({ size }) =>
    size === 'full' ||
    media.m`
    flex: 0 0 calc(50% - 8rem);
    margin: 0 0 8rem 0;
  `} ${({ size }) =>
      size === 'minimal' ||
      media.l`
      flex-basis: calc(33% - 8rem);
  `};
`;

export default Tile;
