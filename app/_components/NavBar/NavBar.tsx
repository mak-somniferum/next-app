'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-10">
      <Link href={'/'} className={pathname === '/' ? 'text-primary' : ''}>
        Home
      </Link>
      <Link href={'/about'} className={pathname === '/about' ? 'text-primary' : ''}>
        About
      </Link>
    </nav>
  );
}
