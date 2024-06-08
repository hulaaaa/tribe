import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
const montserrat = Montserrat({ subsets: ["latin"] });
import { Theme } from '@radix-ui/themes';
import FlareCursor from "./FlareCursor";
import Head from "next/head";
export const metadata: Metadata = {
  title: "TaskoNauts",
  description: "Start working in the most comfortable and modern team and task management environment",
  icons: {
    icon: '/favicon-32x32.png'
  },
  openGraph: {
    title: "TaskoNauts",
    description: "Start working in the most comfortable and modern team and task management environment",
    images: 'https://photos.sphereshowcase.com/tBJczsgyzUAP3woETDr31.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} type="image/png" />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images} />
        <meta property="og:type" content="website" />
      </Head>
      <body className={montserrat.className}>
        <Theme accentColor="gray" radius="large" appearance="dark">
          <FlareCursor />
          {children}
        </Theme>
      </body>
    </html>
  );
}
