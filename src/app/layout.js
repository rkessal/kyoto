import { Funnel_Sans } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Image from "next/image";
import MenuLink from "./components/menu-link";
import fs from 'fs';
import path from 'path';
import PreloadImages from "./components/PreloadImages";

async function getImages() {
  const collectionsDir = path.join(process.cwd(), 'public/collections');
  const collections = fs.readdirSync(collectionsDir);

  let images = []

  collections.forEach((collection) => {
    const smallDir = path.join(collectionsDir, collection, 'small');
    const normalDir = path.join(collectionsDir, collection, 'normal');

    if (fs.existsSync(smallDir)) {
      const smallImages = fs.readdirSync(smallDir).filter(file => file.match(/\d+\.png$/));
      images.push(...smallImages.map(file => `/collections/${collection}/small/${file}`));
    }

    if (fs.existsSync(normalDir)) {
      const normalImages = fs.readdirSync(normalDir).filter(file => file.match(/\d+\.png$/));
      images.push(...normalImages.map(file => `/collections/${collection}/normal/${file}`));
    }
  });

  return images;
}

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

export default async function RootLayout({ children }) {
  const images = await getImages();

  return (
    <>
      <PreloadImages images={images} />
      <html lang="en">
        <body
          className={`${funnelSans.variable} ${buttacup.variable} antialiased`}
        >
          <nav className="z-10 p-8 flex flex-row items-start w-full fixed top-0 left-0  mix-blend-difference text-white">
            <figure className="invert">
              <Image src='/logo.svg' height={13} width={67} alt="" />
              <span className="text-[0rem]">Kyoto</span>
            </figure>
            <ul className="capitalize top-[2rem] left-0 absolute pl-[87.4rem]">
              <li><MenuLink href='/' active>Home</MenuLink> </li>
              <li><MenuLink href='/collections'>Shop</MenuLink></li>
              <li><MenuLink href='/about'>About</MenuLink></li>
              <li><MenuLink href='#'>journal</MenuLink></li>
              <li><MenuLink href='/contact'>contact</MenuLink></li>
            </ul>
            <div className="ml-auto">Bag (0)</div>
          </nav>
          {children}
        </body>
      </html>
    </>
  );
}
