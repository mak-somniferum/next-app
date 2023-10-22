'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-10 flex-col items-center py-20 shadow">
      <Link href="/">
        <Image src="/next.svg" alt="a vercel logo image" width={100} height={50} loading="lazy" />
      </Link>
      <div className="flex gap-10">
        <Link href="/" className={`${pathname === '/' ? 'text-primary' : ''} font-bold text-lg`}>
          Home
        </Link>
        <Link
          href="/about"
          className={`${pathname === '/about' ? 'text-primary' : ''} font-bold text-lg`}
        >
          About
        </Link>
      </div>
    </nav>
  );
}
