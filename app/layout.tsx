import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/ui/header';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Clone Tesla Landing',
  description: 'A clone of Tesla landing page, just for academical purposes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

