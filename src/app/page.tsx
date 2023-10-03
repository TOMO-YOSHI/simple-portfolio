"use client";
import Image from 'next/image';
import { Hero } from '@/components/moleculs/Hero';
import { StickyContainer } from '@/components/templates/StickyContainer';
import { Layout } from '@/components/templates/Layout/Layout';
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <StickyContainer
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
      {/* <Layout>
        
      </Layout> */}
      {/* <StickyContainer /> */}
      {/* <Hero text={'Tomohiro'} /> */}
    </main>
  )
}
