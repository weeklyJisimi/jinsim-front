import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ChakraProvider } from '@/providers/chakraProvider';
import QueryClientProvider from '@/providers/queryClientProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <QueryClientProvider>{children}</QueryClientProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
