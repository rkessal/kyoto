import { Funnel_Sans } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import fs from 'fs';
import path from 'path';
import PreloadImages from "./components/PreloadImages";
import Footer from "./components/footer";
import { TextReveal } from "./components/text-reveal";
import Lenis from "./components/lenis-scroll";
import Navbar from "./components/navbar";

//@todo: get collections from sanity


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
      <Lenis>
        <html lang="en">
          <body
            className={`${funnelSans.variable} ${buttacup.variable} antialiased`}
          >
            <Navbar />
            {children}
            <Footer />
            <TextReveal />
          </body>
        </html>
      </Lenis>
    </>
  );
}
