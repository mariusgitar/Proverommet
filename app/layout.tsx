import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import Script from 'next/script';
import type { ReactNode } from 'react';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif-display',
});

export const metadata: Metadata = {
  title: 'Prøverommet',
  description: 'Prøverommet',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Script
        defer
        src="https://umami-analytics-seven-zeta.vercel.app/script.js"
        data-website-id="6c5545f2-93bb-43b8-b9d5-fd6f14df23f2"
        strategy="afterInteractive"
      />
      <body className={`${dmSans.variable} ${dmSerifDisplay.variable} bg-[#f7f5f0] font-sans text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
