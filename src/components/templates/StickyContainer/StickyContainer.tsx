"use client";
import React, { useRef, useState, useEffect, ReactNode } from 'react';
import * as Styled from './StickyContainer.styled';
import { Hero } from '@/components/moleculs/Hero';

interface StickyContainerProps {
  // StickySection1: JSXElementConstructor<any>;
  children: ReactNode;
}

export const StickyContainer = ({ children }: StickyContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerContainerRef1 = useRef<HTMLDivElement>(null);
  const innerContainerRef2 = useRef<HTMLDivElement>(null);
  const [scrollPercentage1, setScrollPercentage1] = useState(0);
  const [scrollPercentage2, setScrollPercentage2] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (containerRef.current && innerContainerRef1.current && innerContainerRef2.current) {
        const { scrollTop } = containerRef.current;
        const block1Height = innerContainerRef1.current.clientHeight;
        const block2Height = innerContainerRef2.current.clientHeight;

        // Calculate percentage scrolled for Block 1.
        const percentage1 = Math.round((scrollTop / block1Height) * 100);
        setScrollPercentage1(Math.min(100, Math.round(percentage1 / 78 * 100)));

        // Calculate percentage scrolled for Block 2.
        const relativeScrollTopForBlock2 = scrollTop - block1Height;
        if (relativeScrollTopForBlock2 > 0) {
          const percentage2 = Math.round((relativeScrollTopForBlock2 / block2Height) * 100);
          setScrollPercentage2(Math.min(100, Math.round(percentage2 / 78 * 100)));
        } else {
          setScrollPercentage2(0);
        }
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
      <Styled.InnerContainer1 ref={innerContainerRef1}>
        <Styled.StickyContent>
          <Hero
            mainText={"Tomohiro"}
            subText={"Full Stack Dev"}
            percentage={scrollPercentage1}
          />
        </Styled.StickyContent>
      </Styled.InnerContainer1>
      <Styled.InnerContainer2 ref={innerContainerRef2}>
        <Styled.StickyContent>
          Block 2 {scrollPercentage2}%
        </Styled.StickyContent>
      </Styled.InnerContainer2>
      {children}
    </Styled.Container>
  );
}