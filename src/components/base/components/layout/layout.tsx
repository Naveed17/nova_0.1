import { Footer, Header } from "@components/base/components";
import { Poppins } from 'next/font/google';

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
    <div className={`${poppins.className} grid min-h-[100dvh] grid-rows-[auto_1fr_auto]`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
