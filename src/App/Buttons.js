import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { transparentize } from 'polished';
import { sans } from '../lib/fonts';
import { primary } from '../lib/colors';

const Button = styled.button.attrs({
  theme: props => props.theme || transparentize(0.75, primary),
})`
  background-color: grey;
  border: none;
  border-radius: 0;
  padding: 1em 2em;
  font-family: ${sans};
  font-weight: 600;
  letter-spacing: 0.0125em;
  cursor: pointer;

  ${props =>
    props.underline &&
    css`
    background-color: transparent;
    background-image: linear-gradient(${primary}, ${primary});
    background-repeat: no-repeat;
    background-size: 100% 0.125em;
    background-position: 0 90%;
    padding: 0.25em;
    &:hover {
      background-image: ${props => `linear-gradient(${props.theme}, ${props.theme})`};
  `};
`;

export const ButtonInABox = styled.button.attrs({
  theme: props => props.theme || transparentize(0.75, primary),
})`
  display: block;
  text-align: center;
  text-decoration: none;
  background-color: transparent;
  border: none;
  border-top: 1px solid ${props => props.theme};
  border-radius: 0;
  padding: 1em 2em;
  font-family: ${sans};
  font-weight: 600;
  letter-spacing: 0.0125em;
  cursor: pointer;
  color: ${primary};
  width: 50%;

  &:hover {
    color: white;
    background-color: ${props => props.theme};
  }

  ${props =>
    props.primary &&
    css`
    color: white;
    background-color: ${props => props.theme};
    &:hover {
      background-color: transparent;
      color: ${primary};
  `};
`;

export const LinkInABox = ButtonInABox.withComponent(Link);

export default Button;
