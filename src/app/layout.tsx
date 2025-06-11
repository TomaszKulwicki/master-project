import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import Navbar from "../../components/Navbar";
import ClientOnly from "../../components/ClientOnly";

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
        <ThirdwebProvider>
          <ClientOnly>
            <Navbar />
          </ClientOnly>
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}
