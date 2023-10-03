import { styled } from 'styled-components';
import { commonSectionStyle, colors } from '@/styles/variables';
import { fadeIn, slightWaving, waterEffectHigh } from '@/styles/animations';

export const AboutSection = styled.section<{ $percentage: number }>`
  ${commonSectionStyle}
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  color: ${({ $percentage }) => $percentage < 95 ? colors.black : colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.5;
    animation: ${fadeIn} .5s ease-in;

  }
`;

export const WavingHand = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 5rem;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: ${slightWaving} 2.5s linear;
`;

export const SectionHeading = styled.h2`

`;

export const SectionTransition = styled.div<{ $percentage: number }>`
		background: ${colors.black};
		position: absolute;
		width: 100%;
		height: ${props => props.$percentage}%;
		bottom: 0;
		animation: ${waterEffectHigh} 4s ease-in-out infinite;
`;