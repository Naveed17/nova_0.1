import { Footer, Header, MobileNav } from "@components/base/components";
import { Poppins } from 'next/font/google';
import { useSyncExternalStore } from "react";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700']
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const subscribe = (callback: () => void) => {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);
    return () => {
      window.removeEventListener('online', callback);
      window.removeEventListener('offline', callback);
    };
  };

  const getSnapshot = () => navigator.onLine;
  const isOnline = useSyncExternalStore(subscribe, getSnapshot)
  return (
    <div className={`${poppins.className} lg:grid lg:min-h-[100dvh] lg:grid-rows-[auto_1fr_auto]`}>
      <Header />
      <main className="pb-16 md:pb-0">
        {isOnline ? children : <div className="flex items-center justify-center h-screen">You are offline</div>}
        <MobileNav />
      </main>
      <Footer />
    </div>
  );
}
