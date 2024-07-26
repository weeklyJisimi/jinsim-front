'use client';

import { ReactNode } from 'react';
import { useLetterFlowStore } from './letter-flow-store';

type LayoutProps = {
  children: ReactNode; // 기본 페이지
  initial: ReactNode; // 초기 페이지
};

const Layout = ({ children, initial }: LayoutProps) => {
  const { state } = useLetterFlowStore();
  if (state === 'initial') {
    return <>{initial}</>;
  }
  return <>{children}</>;
};

export default Layout;
