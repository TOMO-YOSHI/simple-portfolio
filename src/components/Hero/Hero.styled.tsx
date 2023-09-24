import { styled, keyframes } from 'styled-components';

const waterEffect = keyframes`
  0%,
	100% {
		clip-path: polygon(
			0% 45%,
			16% 44%,
			33% 50%,
			54% 60%,
			70% 61%,
			84% 59%,
			100% 52%,
			100% 100%,
			0% 100%
		);
	}

	50% {
		clip-path: polygon(
			0% 60%,
			15% 65%,
			34% 66%,
			51% 62%,
			67% 50%,
			84% 45%,
			100% 46%,
			100% 100%,
			0% 100%
		);
	}
`;

export const HeroSection = styled.section`
  top: 0;
  height: 80vh;
  width: 100vw;
  background: red;
  /* height: 200px;
  width: 200px */
`;

export const StickyContainer = styled.div`
`;

export const WaterEffectTextContainer = styled.div`
  position: relative;
  
  h2 {
    color: #fff;
    font-size: 8em;
    position: absolute;
    /* transform: translate(-50%, -50%); */

    &:nth-child(1) {
      color: transparent;
      -webkit-text-stroke: 2px #141414;
    }
    &:nth-child(2) {
      color: #141414;
      animation: ${waterEffect} 4s ease-in-out infinite;
    }
  }
`;