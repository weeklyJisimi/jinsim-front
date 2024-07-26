import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ChakraProvider } from '@/providers/chakraProvider';
import QueryClientProvider from '@/providers/queryClientProvider';
import MainLayout from '@/component/layout/mainLayout';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '진심이',
  description: '진심이는 편지를 생성해주는 AI입니다',
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
          <QueryClientProvider>
            <MainLayout>{children}</MainLayout>
          </QueryClientProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
