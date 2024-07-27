'use client';

import { ReactNode } from 'react';
import { useLetterFlowStore } from './letter-flow-store';

type LayoutProps = {
  children: ReactNode; // 기본 페이지
  initial: ReactNode; // 초기 페이지
  create: ReactNode; // 편지 쓰기 페이지
  decorate: ReactNode; // 편지 꾸미기 페이지
  complete: ReactNode; // 편지 완료 페이지
};

const Layout = ({
  children,
  initial,
  create,
  decorate,
  complete,
}: LayoutProps) => {
  const { state } = useLetterFlowStore();
  if (state === 'initial') {
    return <>{initial}</>;
  }
  if (state === 'create' || state === 'edit') {
    return <>{create}</>;
  }
  if (state === 'decorate') {
    return <>{decorate}</>;
  }
  if (state === 'complete') {
    return <>{complete}</>;
  }

  return <>{children}</>;
};

export default Layout;
