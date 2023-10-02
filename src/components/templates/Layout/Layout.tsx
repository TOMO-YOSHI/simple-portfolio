import React, { ReactNode } from 'react'
import { StickyContainer } from '../StickyContainer';
import { Hero } from '@/components/moleculs/Hero';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
  return (
    <div>
      <StickyContainer>
        {children}
      </StickyContainer>
    </div>
  )
}
