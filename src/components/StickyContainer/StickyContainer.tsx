"use client";
import React, { useRef, useState, useEffect } from 'react';
import * as Styled from './StickyContainer.styled';

export const StickyContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

        // Calculate percentage scrolled.
        const percentage = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);
        
        // Update the state with the new value.
        setScrollPercentage(percentage);
      }
    };

    if (containerRef.current) {
      const containerCurrent = containerRef.current;
      containerCurrent.addEventListener('scroll', onScroll);

      return () => {
        if (containerCurrent) {
          containerCurrent.removeEventListener('scroll', onScroll);
        }
      };
    }
  }, [])

  return (
    <Styled.Container ref={containerRef}>
      <Styled.InnerContainer>
        <Styled.StickyContent>
          Block 1 {scrollPercentage}%
        </Styled.StickyContent>
      </Styled.InnerContainer>
    </Styled.Container>
  );
}
