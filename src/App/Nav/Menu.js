import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from '../Container';
import ItemList from '../ItemList';
import ObjectTile from '../ObjectTile';
import objects from '../../lib/data/objects';
import { primary, light } from '../../lib/colors';

const Menu = ({ isOpen, toggleMenu }) => (
  <MenuWrapper isOpen={isOpen}>
    <Container>
      <ItemList Component={ObjectTile} items={objects} onClick={toggleMenu} theme="dark" />
    </Container>
  </MenuWrapper>
);

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Menu;

const MenuWrapper = styled.div`
  position: fixed;
  z-index: 999;
  background-color: ${primary};
  color: ${light};
  width: 100vw;
  top: 16rem;
  bottom: 0;
  right: -100vw;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: all 0.3s cubic-bezier(0.19, 0.66, 0.67, 0.98);
  transform: ${({ isOpen }) => (isOpen ? 'translateX(-100vw)' : 'translateX(0)')};
`;
