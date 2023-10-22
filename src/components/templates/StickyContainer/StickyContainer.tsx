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
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage1] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (containerRef.current && stickyContainerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const stickyContainerRect = stickyContainerRef.current.getBoundingClientRect();
        const scrolledHeight = containerRect.y <= 0 ? Math.abs(containerRect.y) : 0;
        const scrollableHeight = viewHeight - stickyContainerRect.height + 15;
        
        setScrollPercentage1(Math.round(scrolledHeight / scrollableHeight * 100) <= 99 ? Math.round(scrolledHeight / scrollableHeight * 100) : 100 );
      }
    };

    if (containerRef.current) {
      window.addEventListener('scroll', onScroll);

      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }
  }, []);

  return (
    <Styled.Container ref={containerRef} height={height}>
        <Styled.StickyContent ref={stickyContainerRef}>
          {child(scrollPercentage)}
        </Styled.StickyContent>
    </Styled.Container>
  );
}