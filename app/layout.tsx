import type { Metadata } from 'next';
import './globals.css';
import './approved-home.css';

export const metadata: Metadata = {
  title: 'IRON TRADING',
  description: 'Funded Trading Intelligence',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
