"use client";

import { ThirdwebProvider } from "@thirdweb-dev/react";
import {
  Sepolia,
  BinanceTestnet,
  AvalancheFuji,
} from "@thirdweb-dev/chains";

const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!;

if (!clientId) {
  throw new Error("Brak NEXT_PUBLIC_THIRDWEB_CLIENT_ID w pliku .env");
}

export default function ThirdwebProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThirdwebProvider
      activeChain={Sepolia}
      supportedChains={[Sepolia, BinanceTestnet, AvalancheFuji]}
      clientId={clientId}
    >
      {children}
    </ThirdwebProvider>
  );
}
