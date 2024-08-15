import { Footer, Header, MobileNav } from "@components/base/components";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Jost, Mulish } from 'next/font/google';
import { useSyncExternalStore } from "react";

const jost: NextFontWithVariable = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
  weight: ['400', '500', '600', '700']
});
const mulish: NextFontWithVariable = Mulish({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mulish',
  weight: ['400', '500', '600', '700', '800', '900']
});
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
  //lg:grid lg:min-h-[100dvh] lg:grid-rows-[auto_1fr_auto]
  const getSnapshot = () => navigator.onLine;
  const isOnline = useSyncExternalStore(subscribe, getSnapshot)
  return (
    <div className={`${jost.className} ${mulish.variable}`}>
      <Header />
      <main className="pb-16 md:pb-0">
        {isOnline ? children : <div className="flex items-center justify-center h-screen">You are offline</div>}
        <MobileNav />
      </main>
      <Footer />
    </div>
  );
}
