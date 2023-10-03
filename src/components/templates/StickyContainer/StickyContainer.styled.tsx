import { styled } from 'styled-components';

export const Container = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
`;

export const InnerContainer = styled.div<{viewHeight: number}>`
  height: ${({ viewHeight }) => `${viewHeight}px`};
  position: relative;
`;

export const StickyContent = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;