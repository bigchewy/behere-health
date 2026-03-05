import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: `BeHere.health — Mindset support designed for Long COVID and POTS patients`,
  description: `Long COVID and POTS patients face unique mental health challenges. Voice-based mindset coaching designed specifically for post-viral syndrome symptoms and crashes.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-text min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
