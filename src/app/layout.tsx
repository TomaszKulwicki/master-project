import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ThirdwebProviderWrapper from "../../components/ThirdwebProviderWrapper";
import Navbar from "../../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Idler clicker"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProviderWrapper>
          <Navbar />
          {children}
        </ThirdwebProviderWrapper>
      </body>
    </html>
  );
}
