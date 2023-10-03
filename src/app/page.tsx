"use client";
import { Hero } from '@/components/moleculs/Hero';
import { StickyContainer } from '@/components/templates/StickyContainer';

export default function Home() {
  return (
    <main>
      <StickyContainer
        height={1000}
        child={(percentage) => {
          return (
            <Hero
              mainText={"Tomohiro"}
              subText={"Full Stack Dev"}
              percentage={percentage}
            />
          )
        }}
      />
      <StickyContainer
        height={1000}
        child={(percentage) => {
          return (
            <Hero
              mainText={"Tomohiro"}
              subText={"Full Stack Dev"}
              percentage={percentage}
            />
          )
        }}
      />
    </main>
  )
}
