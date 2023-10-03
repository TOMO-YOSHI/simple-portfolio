"use client";
import React, { useEffect, useState } from 'react';
import * as Styled from './Hero.styled';

export interface HeroProps {
  percentage?: number;
}

export const Hero: React.FC<HeroProps> = ({percentage = 100,}) => {
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
      </Styled.HeroSection>
  )
}
