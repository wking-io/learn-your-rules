import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import ObjectList from '../ObjectList';
import ObjectTile from '../ObjectTile';
import objects from '../../lib/data/objects';
import { primary, light } from '../../lib/colors';

const Menu = ({ isOpen, toggleMenu }) => (
  <MenuWrapper isOpen={isOpen}>
    <Container>
      <ObjectList objects={objects} Item={ObjectTile} theme="dark" onClick={toggleMenu} />
    </Container>
  </MenuWrapper>
);

export default Menu;

const MenuWrapper = styled.div`
  position: fixed;
  background-color: ${primary};
  color: ${light};
  width: 100vw;
  top: 16rem;
  bottom: 0;
  right: -100vw;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: all 0.3s cubic-bezier(0.19, 0.66, 0.67, 0.98);
  transform: ${props => (props.isOpen ? 'translateX(-100vw)' : 'translateX(0)')};
`;
