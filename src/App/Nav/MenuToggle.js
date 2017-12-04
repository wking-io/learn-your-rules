import React from 'react';
import styled from 'styled-components';
import { primary } from '../../lib/colors';

const MenuToggle = ({ toggleMenu, isOpen }) => (
  <Toggle aria-expanded={isOpen} onClick={toggleMenu}>
    <span />
    <span />
    <span />
  </Toggle>
);

export default MenuToggle;

const Toggle = styled.button`
  border: none;
  background-image: none;
  background-color: transparent;
  box-shadow: none;
  position: relative;
  width: 8rem;
  cursor: pointer;
  height: 100%;

  :focus,
  :active {
    outline: none;
  }

  & span {
    background-color: ${primary};
    position: absolute;
    height: 1rem;
    width: 70%;
    top: calc(50% + 0.5rem);
    right: 0;
    transition: all 0.3s cubic-bezier(0.19, 0.66, 0.67, 0.98);
  }

  & span:first-child {
    width: 100%;
    top: calc(50% - 1.5rem);
    transition: opacity 0.2s linear 0.1s;
  }

  &[aria-expanded='true'] span {
    width: 100%;
    transform: translateY(-0.5rem) rotate(45deg);
  }

  &[aria-expanded='true'] span:first-child {
    opacity: 0;
    transition: none;
  }

  &[aria-expanded='true'] span:last-child {
    transform: translateY(-0.5rem) rotate(-45deg);
  }
`;
