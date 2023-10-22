import { ReactNode } from 'react';
import { NavBar } from '@/app/_components';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
