"use client";
import React, { useRef, useState, useEffect, ReactNode } from 'react';
import * as Styled from './StickyContainer.styled';

interface StickyContainerProps {
  child: (percentage: number) => ReactNode;
  height: number;
}

export const StickyContainer = ({ child, height }: StickyContainerProps) => {
  const [viewHeight] = useState(height);
  const containerRef = useRef<HTMLDivElement>(null);
  const innerContainerRef = useRef<HTMLDivElement>(null);
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage1] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (containerRef.current && innerContainerRef.current && stickyContainerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const innerContainerRect = innerContainerRef.current.getBoundingClientRect();
        const stickyContainerRect = stickyContainerRef.current.getBoundingClientRect();
        const offTop = containerRect.y - innerContainerRect.y
        const maxScrollableHeight = viewHeight - stickyContainerRect.height;

        setScrollPercentage1(Math.round(offTop / maxScrollableHeight * 100))
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
  }, []);

  return (
    <Styled.Container ref={containerRef}>
      <Styled.InnerContainer ref={innerContainerRef} viewHeight={viewHeight}>
        <Styled.StickyContent ref={stickyContainerRef}>
          {child(scrollPercentage)}
        </Styled.StickyContent>
      </Styled.InnerContainer>
    </Styled.Container>
  );
}