import { styled } from 'styled-components';

export const Container = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  border: 2px green solid;
`;

export const InnerContainer = styled.div`
  height: 4000px;
  position: relative;
  border: 2px red solid;
`;

export const StickyContent = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  border: 2px blue solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;