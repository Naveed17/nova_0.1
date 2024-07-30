import { Footer, Header, MobileNav } from "@components/base/components";
import { LoadingScreen } from "@components/loadingScreen";
import { Poppins } from 'next/font/google';
import { Suspense } from "react";

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
  return (
    <div className={`${poppins.className} lg:grid lg:min-h-[100dvh] lg:grid-rows-[auto_1fr_auto]`}>
      <Header />
      <main className="pb-16 md:pb-0">
        {children}
        <MobileNav />
      </main>
      <Footer />
    </div>
  );
}
