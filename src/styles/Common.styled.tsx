import { styled, css } from 'styled-components';

export const colors = {
  black: '#141414',
  darkGray: '#565656',
  lightGray: '#9e9e9e',
  orange: '#fba92c',
  white: '#ffffff'
};

export const breakPoints = {
  md: 768,
  lg: 1024,
  xl: 1280
}

export const commonSectionStyle = css`
  max-width: 1024px;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: ${breakPoints.md}px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (min-width: ${breakPoints.lg}px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (min-width:  ${breakPoints.xl}px) {
    padding-left: auto;
    padding-right: auto;
  }
` 