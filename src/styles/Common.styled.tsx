import { styled, css } from 'styled-components';
import { colors } from './variables';

export const AbsInstruction = styled.p`
  color: ${colors.white};
  position: absolute;
  right: -1rem;
  bottom: 2.5rem;
  transform: rotate(-90deg);
  text-decoration: underline;
  font-size: 1.25rem;
  font-weight: 800;
`;