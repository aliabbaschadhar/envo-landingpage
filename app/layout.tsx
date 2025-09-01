import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Envo - Modern Coding Environment',
  description: 'Build, collaborate, and deploy with the next-generation coding platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans bg-deep-navy text-white overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}