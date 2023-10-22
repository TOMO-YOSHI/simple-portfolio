"use client";
import React from 'react';
import * as Styled from './Hero.styled';
import { AbsInstruction } from '@/styles/Common.styled';

export interface HeroProps {
  percentage?: number;
}

export const Hero = ({ percentage = 100 }: HeroProps) => {
  return (
      <Styled.HeroSection>
        <Styled.TargetTextPosition>
          <Styled.WaterEffectTextContainer $percentage={percentage}>
            <div />
            {/* <h2><span className='orange'>T</span>omohiro</h2> */}
            <h2>Tomohiro</h2>
            <h2>Full Stack Dev</h2>
            {/* <p>{subText}</p> */}
          </Styled.WaterEffectTextContainer>
        </Styled.TargetTextPosition>
        <AbsInstruction>← Scroll</AbsInstruction>
      </Styled.HeroSection>
  )
}
