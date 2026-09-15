import type { Metadata } from 'next';
import './final-home.css';
import './ui-polish.css';

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
