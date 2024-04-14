"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <NextUIProvider>
          <Header />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
