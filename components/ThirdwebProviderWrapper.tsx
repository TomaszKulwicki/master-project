"use client";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";

export const supportedChains = [
  { chainId: 11155111, name: "Sepolia" },
  { chainId: 97, name: "BSC Testnet" },
  { chainId: 43113, name: "Avalanche Fuji" },
  { chainId: 80001, name: "Polygon Mumbai" },
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
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
    >
      {children}
    </ThirdwebProvider>
  );
}
