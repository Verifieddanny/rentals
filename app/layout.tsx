"use client"
// import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Poppins, Montserrat } from 'next/font/google'
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
import { useState } from "react";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"]
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [visibility, setVisibility] = useState<boolean>(false);
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
          <body
        className={`${poppins.className}  antialiased relative`}
      >
        <Sidenav setVisibility={setVisibility} visibility={visibility} />
        <div className="w-full h-fit fixed left-0 top-3 px-0 z-40">

        <Navbar setVisibility={setVisibility} />
        </div>
       
        {children}
      </body>
    </html>
  );
}
