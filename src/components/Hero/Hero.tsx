"use client";
import React, { useEffect, useState } from 'react';
import * as Styled from './Hero.styled';

export interface HeroProps {
  text: string;
}

export const Hero: React.FC<HeroProps> = ({ text }) => {
  return (
      <Styled.HeroSection>
        <Styled.StickyContainer>
          <Styled.WaterEffectTextContainer>
            <h2>{text}</h2>
            <h2>{text}</h2>
          </Styled.WaterEffectTextContainer>
        </Styled.StickyContainer>
      </Styled.HeroSection>
  )
}
