import { css } from 'styled-components';

const sizes = {
  xl: 1440,
  l: 1000,
  m: 660,
  s: 425,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
