"use client";
import { Layout } from '@/components/templates/Layout';
import { Hero } from '@/components/organisms/Hero';
import { About } from '@/components/organisms/About';
import { Experience } from '@/components/organisms/Experience';
import { StickyContainer } from '@/components/templates/StickyContainer';

export default function Home() {
  return (
    <>
      <Layout>
        <main>
          <StickyContainer
            height={2000}
            child={(percentage) => {
              return (
                <Hero
                  percentage={percentage}
                />
              )
            }}
          />
          <StickyContainer
            height={3000}
            child={(percentage) => {
              return (
                <About
                  percentage={percentage}
                />
              )
            }}
          />
          <StickyContainer
            height={3000}
            child={(percentage) => {
              return (
                <Experience
                  percentage={percentage}
                />
              )
            }}
          />
        </main>
      </Layout>
    </>
  )
}
