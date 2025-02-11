import { Funnel_Sans } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Image from "next/image";

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
});


const buttacup = localFont({
  src: [
    {
      path: '../../public/fonts/SF_Buttacup_Lettering.ttf',
      weight: '400'
    },
  ],
  variable: '--font-buttacup'
})

export const metadata = {
  title: "Kyoto",
  description: "Kyoto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${funnelSans.variable} ${buttacup.variable} antialiased`}
      >
        <nav className="z-10 p-8 flex flex-row items-start w-full fixed top-0 left-0">
          <figure>
            <Image src='/logo.svg' height={13} width={67} alt=""/>
            <span className="text-[0rem]">Kyoto</span>
          </figure>
          <ul className="capitalize top-[2rem] left-0 absolute pl-[87.4rem]">
            <li>Home</li>
            <li>Shop</li>
            <li>About </li>
            <li>journal</li>
            <li>contact</li>
          </ul>
          <div className="ml-auto">Bag (0)</div>
        </nav>
        {children}
      </body>
    </html>
  );
}
