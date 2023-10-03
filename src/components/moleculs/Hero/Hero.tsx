"use client";
import React, { useEffect, useState } from 'react';
import * as Styled from './Hero.styled';

export interface HeroProps {
  mainText: string;
  subText?: string
  percentage?: number;
}

export const Hero: React.FC<HeroProps> = ({ mainText, percentage = 100, subText}) => {
  return (
      <Styled.HeroSection>
        <Styled.TargetTextPosition>
          <Styled.WaterEffectTextContainer $percentage={percentage}>
            <div />
            <h2>{mainText}</h2>
            <h2>{subText}</h2>
            {/* <p>{subText}</p> */}
          </Styled.WaterEffectTextContainer>
        </Styled.TargetTextPosition>
      </Styled.HeroSection>
  )
}
