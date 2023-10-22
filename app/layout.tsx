import '@/styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Next.js',
    default: 'My First Next.js',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
