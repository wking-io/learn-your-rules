import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { transparentize } from 'polished';
import { sans } from '../lib/fonts';
import { primary, light } from '../lib/colors';

const Button = styled.button.attrs({
  theme: ({ theme }) => theme || transparentize(0.75, primary),
})`
  background-color: grey;
  border: none;
  border-radius: 0;
  padding: 1em 2em;
  font-family: ${sans};
  font-weight: 600;
  letter-spacing: 0.0125em;
  cursor: pointer;
`;

export const UnderlineButton = styled.button`
  text-decoration: none;
  text-transform: ${({ proper }) => (proper ? 'capitalize' : 'none')};
  background-color: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
  font-size: ${({ large }) => (large ? '8rem' : '4rem')};
  font-weight: bold;
  color: ${({ theme }) => (theme === 'dark' ? light : primary)};
  background-image: ${({ theme }) =>
    theme === 'dark'
      ? `linear-gradient(
${transparentize(0.75, light)},
${transparentize(0.75, light)}
)`
      : `linear-gradient(
${transparentize(0.75, primary)},
${transparentize(0.75, primary)}
)`};
  background-size: 100% 0.375em;
  background-position: 0 100%;
  background-repeat: no-repeat;

  &:hover {
    background-image: ${({ theme }) =>
      theme === 'dark'
        ? `linear-gradient(
${transparentize(0.6, light)},
${transparentize(0.6, light)}
)`
        : `linear-gradient(
${transparentize(0.6, primary)},
${transparentize(0.6, primary)}
)`};
  }
`;

export const ButtonInABox = styled.button.attrs({
  theme: ({ theme }) => theme || transparentize(0.75, primary),
})`
  display: block;
  text-align: center;
  text-decoration: none;
  background-color: transparent;
  border: none;
  border-top: 1px solid ${({ theme }) => theme};
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
    background-color: ${({ theme }) => theme};
  }

  ${({ primary }) =>
    primary &&
    css`
    color: white;
    background-color: ${({ theme }) => theme};
    &:hover {
      background-color: transparent;
      color: ${primary};
  `};
`;

export const LinkInABox = ButtonInABox.withComponent(Link);
export const UnderlineLink = UnderlineButton.withComponent(Link);

export default Button;
