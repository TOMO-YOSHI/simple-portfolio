"use client";
import React, { useRef, useState, useEffect } from 'react';
import * as Styled from './StickyContainer.styled';

export const StickyContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const container1Ref = useRef<HTMLDivElement>(null);

  const [scrollYInside1, setScrollYInside1] = useState<number>(0);

  const handleScroll = () => {
    if (!containerRef.current || !container1Ref.current) return;

    const containerHeight = containerRef.current.offsetHeight;
    const distanceFromTop = container1Ref.current.getBoundingClientRect().top - containerRef.current.getBoundingClientRect().top;

    let scrolledLength = containerHeight - distanceFromTop;

    // Ensure the value is between 0 and the height of InnerContainer
    scrolledLength = Math.max(0, Math.min(scrolledLength, container1Ref.current.offsetHeight));

    setScrollYInside1(scrolledLength);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
      return () => {
        containerRef.current?.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <Styled.Container ref={containerRef}>
      <Styled.InnerContainer ref={container1Ref}>
        <Styled.StickyContent>
          Hello world, from section 1! Scrolled: {scrollYInside1}px
        </Styled.StickyContent>
      </Styled.InnerContainer>
    </Styled.Container>
  );
}
