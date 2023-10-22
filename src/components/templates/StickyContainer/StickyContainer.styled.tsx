import { styled } from 'styled-components';

export const Container = styled.div<{ height: number }>`
  height: ${({ height }) => `${height}px`};
  position: relative;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */

  &::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
  }
`;

export const StickyContent = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;