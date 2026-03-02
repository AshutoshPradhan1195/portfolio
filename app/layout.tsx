
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import SmoothProvider from "./components/layout/SmoothLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    

  return (

  
    <html lang="en">
      <head>
       <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </head>
      <body

        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a]`}
        >
        <SmoothProvider />
        <div id="circle" className="z-50 flex fixed pointer-events-none justify-center items-center w-10 h-10 top-[-20] left-[-20] border-white border-2 rounded-full "/>
          <div id="innercircle" className="z-50 pointer-events-none fixed top-[-2] left-[-2] w-2 h-2 bg-white rounded-full"/>

        <div id="smooth-wrapper">
            <div id="smooth-content">

              <div className="flex flex-col justify-center w-full items-center max-w-[2500px]  w-full">
                <div className="flex flex-col justify-center   w-full select-none items-center">
                  <Navbar />
                  <div className="w-full">
                    {children}
                  </div>
                </div>
              </div>

            </div>
        </div>

      </body>
    </html>
  );
}
