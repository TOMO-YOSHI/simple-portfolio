import { styled, css } from 'styled-components';

export const colors = {
  black: '#141414',
  darkGray: '#565656',
  lightGray: '#9e9e9e',
  orange: '#fba92c',
  white: '#ffffff'
};

export const commonSectionStyle = css`
  max-width: 1024px;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (min-width: 1024px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (min-width: 1280px) {
    padding-left: auto;
    padding-right: auto;
  }
` 