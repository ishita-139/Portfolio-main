import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ishita Agarwal | Portfolio',
  keywords: ['Ishita Agarwal', 'Full Stack Developer', 'Next.js', 'Node.js', 'MongoDB', 'JavaScript', 'Portfolio'],
  authors: [{ name: 'Ishita Agarwal' }],
  creator: 'Ishita Agarwal',
  publisher: 'Ishita Agarwal',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rajatkumarthakur.vercel.app',
    title: 'Ishita Agarwal | Portfolio',
    siteName: 'Ishita Agarwal Portfolio',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
