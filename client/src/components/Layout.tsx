import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import { Header } from './Header';
import { Footer } from './Footer';
import { BlockchainBackground } from './BlockchainBackground';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative">
      <BlockchainBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
      <Toaster />
    </div>
  );
}
