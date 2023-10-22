"use client";
import { Layout } from '@/components/templates/Layout';
import { Hero } from '@/components/organisms/Hero';
import { About } from '@/components/organisms/About';
import { StickyContainer } from '@/components/templates/StickyContainer';

export default function Home() {
  return (
    <>
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
      <Layout>
        <main>
          <StickyContainer
            height={2000}
            child={(percentage) => {
              return (
                <About
                  percentage={percentage}
                />
              )
            }}
          />
          <StickyContainer
            height={2000}
            child={(percentage) => {
              return (
                <About
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
