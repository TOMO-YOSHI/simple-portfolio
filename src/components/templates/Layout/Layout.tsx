import React, { ReactNode } from 'react'
import * as Styled from './Layout.styled';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
  return (
    <Styled.Layout>
      {children}
    </Styled.Layout>
  )
}
