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
    <div className={`${poppins.className}`}>
      <Header />
      <main className="pb-16 md:pb-0">{children}</main>
      <Footer />
    </div>
  );
}
