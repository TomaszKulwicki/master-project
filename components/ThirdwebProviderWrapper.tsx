"use client";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { Sepolia, AvalancheFuji, Chain } from "@thirdweb-dev/chains";

export const amoy = {
  chainId: 80002,
  name: "Polygon Amoy Testnet",
  chain: "polygon",
  shortName: "amoy",
  slug: "amoy",
  rpc: ["https://rpc-amoy.polygon.technology"],
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  blockExplorers: {
    default: {
      name: "OKLink",
      url: "https://www.oklink.com/amoy",
    },
  },
  testnet: true,
} as const;

export const supportedChains = [
  Sepolia,
  AvalancheFuji,
  amoy,
];

export default function ThirdwebProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeChainId, setActiveChainId] = useState<number | undefined>();

  useEffect(() => {
    const stored = localStorage.getItem("selectedChainId");
    if (stored) {
      setActiveChainId(Number(stored));
    } else {
      setActiveChainId(11155111);
    }
  }, []);

  if (!activeChainId) return null;

  return (
    <ThirdwebProvider
      activeChain={activeChainId}
      supportedChains={supportedChains}
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
    >
      {children}
    </ThirdwebProvider>
  );
}
