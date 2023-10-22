import { styled } from 'styled-components';
import { commonSectionStyle, colors } from '@/styles/variables';
import { waterEffectHigh } from '@/styles/animations';

const textColor = colors.white
const backgroundColor = colors.black

export const HeroSection = styled.section`
  ${commonSectionStyle}
  top: 0;
  height: 100vh;
  width: 100vw;
  position: sticky;
`;

export const TargetTextPosition = styled.div`
	position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const WaterEffectTextContainer = styled.div<{$percentage: number}>`
  position: relative;
	height: 100vh;
	width: 100vw;
	background: ${backgroundColor};
  
  h2 {
		background: transparent;
    font-size: 3rem;
    position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 100;

    &:nth-child(2) {
      color: ${textColor};
    }
    &:nth-child(3) {
      color: ${backgroundColor};
      visibility: ${({ $percentage }) => $percentage > 50 ? 'visible' : 'hidden'};
    }
  }

	p {
		position: absolute;
		background: transparent;
		color: ${textColor};
		font-size: 2rem;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-top: ${textColor} 2px solid;
		border-bottom: ${textColor} 2px solid;
	}

	div {
		background: ${textColor};
		position: absolute;
		width: 100%;
		height: ${props => props.$percentage}%;
		bottom: 0;
		animation: ${waterEffectHigh} 4s ease-in-out infinite;
	}

  @media (min-width: 768px) {
    h2 {
      font-size: 6rem;
    }
  }
  @media (min-width: 1024px) {
    h2 {
      font-size: 8rem;
    }
  }
`;