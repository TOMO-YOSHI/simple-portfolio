import Image from 'next/image';
import { Hero } from '@/components/Hero';
import { StickyContainer } from '@/components/StickyContainer';
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <StickyContainer />
      {/* <StickyContainer /> */}
      {/* <Hero text={'Tomohiro'} /> */}
    </main>
  )
}
