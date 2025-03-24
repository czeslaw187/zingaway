import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/legacy/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zing Away",
  description: "Sending dynamic orders in your gastro-bussiness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} w-screen min-h-screen relative`}>
        <div><Image src='/Background9.jpg' alt='Background1' layout='fill' objectFit='cover' quality={100} /></div>
        {children}
      </body>
    </html>
  );
}

// bg-gradient-to-b from-slate-900 via-cyan-700 to-amber-500