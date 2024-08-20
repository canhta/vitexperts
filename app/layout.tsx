'use client';
import { useEffect } from 'react';
import './globals.css';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.min.js');
  }, []);

  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/png' href='../favicon.ico' />
      </head>
      <body>{children}</body>
    </html>
  );
}
