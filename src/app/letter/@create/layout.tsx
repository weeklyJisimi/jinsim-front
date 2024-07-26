import { ReactNode, Suspense } from 'react';

const Layout = ({ children }: { children: ReactNode }) => (
  <Suspense>{children}</Suspense>
);

export default Layout;
