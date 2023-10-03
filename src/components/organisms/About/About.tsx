import React from 'react';
import * as Styled from './About.styled';

interface AboutProps {
  percentage: number
}

export const About = ({ percentage }: AboutProps) => {
  return (
    <>
      <Styled.SectionTransition $percentage={(percentage - 90) / 10 * 100} />
      <Styled.AboutSection $percentage={percentage}>
        <h2>About Me</h2>
        {
          percentage > 10 &&
          <>
            <p>Hi there!</p>
            <Styled.WavingHand>👋</Styled.WavingHand>
          </>
        }
        {
          percentage > 30 &&
          <p>I&apos;m a full-stack dev working in a travel arrangement company&apos;s marketing team,
            {
              percentage > 50 &&
              <>creating user - friendly websites using Next.js, TypeScript, and TailwindCSS.</>
            }</p>
        }
        {
          percentage > 70 &&
          <p>Passionate about staying up-to-date with the latest trend.</p>
        }
      </Styled.AboutSection>
    </>
  )
}
