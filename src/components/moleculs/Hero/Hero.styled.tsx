import { styled, keyframes } from 'styled-components';

const waterEffect = keyframes`
  0%, 100% {
    clip-path: polygon(
      0% 45%,
      8% 43%,
      16% 44%,
      24% 47%,
      33% 50%,
      42% 55%,
      54% 60%,
      62% 61%,
      70% 61%,
      78% 60%,
      84% 59%,
      92% 55%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      8% 62%,
      15% 65%,
      24% 66%,
      34% 66%,
      42% 64%,
      51% 62%,
      58% 58%,
      67% 50%,
      75% 47%,
      84% 45%,
      92% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
`;

const waterEffectHigh = keyframes`
  0%, 100% {
    clip-path: polygon(
      0% 10%,
      8% 9.5%,
      16% 9%,
      24% 9.5%,
      33% 10%,
      42% 12%,
      54% 15%,
      62% 18%,
      70% 20%,
      78% 18%,
      84% 15%,
      92% 13%,
      100% 12%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 5%,
      8% 4.5%,
      15% 4%,
      24% 4.5%,
      34% 5%,
      42% 6%,
      51% 7%,
      58% 8.5%,
      67% 10%,
      75% 9%,
      84% 6%,
      92% 6.5%,
      100% 8%,
      100% 100%,
      0% 100%
    );
  }
`;

const waterEffectLow = keyframes`
  0%, 100% {
    clip-path: polygon(
      0% 70%,
      8% 60%,
      16% 50%,
      24% 65%,
      33% 45%,
      42% 55%,
      54% 40%,
      62% 60%,
      70% 52%,
      78% 65%,
      84% 58%,
      92% 50%,
      100% 55%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      8% 70%,
      15% 65%,
      24% 60%,
      34% 75%,
      42% 62%,
      51% 70%,
      58% 55%,
      67% 68%,
      75% 60%,
      84% 72%,
      92% 58%,
      100% 65%,
      100% 100%,
      0% 100%
    );
  }
`;

const textColor = "#ffffff"
const backgroundColor = "#141414"
// const backgroundColor = "#ffffff"
// const textColor = "#141414"

export const HeroSection = styled.section`
  top: 0;
  height: 100vh;
  width: 100vw;
`;

export const StickyContainer = styled.div`
`;

export const TargetTextPosition = styled.div`
	position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const WaterEffectTextContainer = styled.div<{$percentage: number}>`
  position: relative;
	height: 100lvh;
	width: 100vw;
	background: ${backgroundColor};
  
  h2 {
    /* color: #fff; */
    /* color: ${backgroundColor}; */
    color: ${textColor};
		background: transparent;
    font-size: 8em;
    position: absolute;
		top: 42%;
		left: 50%;
		transform: translate(-50%, -42%);
		z-index: 100;

    &:nth-child(1) {
      color: transparent;
      /* -webkit-text-stroke: 2px ${backgroundColor}; */
      -webkit-text-stroke: 2px ${textColor};
    }
    &:nth-child(2) {
      /* color: ${backgroundColor}; */
      color: ${textColor};
      animation: ${waterEffect} 4s ease-in-out infinite;
    }
  }

	p {
		position: absolute;
		background: transparent;
		color: ${textColor};
		font-size: 2rem;
		top: 60%;
		left: 50%;
		transform: translate(-50%, -60%);
		border-top: ${textColor} 2px solid;
		border-bottom: ${textColor} 2px solid;
	}

	div {
		/* background: ${backgroundColor}; */
		background: ${textColor};
		position: absolute;
		/* z-index: 100; */
		width: 100%;
		/* height: 100%; */
		height: ${props => props.$percentage}%;
		bottom: 0;
		animation: ${waterEffectHigh} 4s ease-in-out infinite;
	}
`;