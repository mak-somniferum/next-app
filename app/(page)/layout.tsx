import { ReactNode } from 'react';
import { NavBar } from '@/app/_components';
import { URL } from '@/app/_utils/constants';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
