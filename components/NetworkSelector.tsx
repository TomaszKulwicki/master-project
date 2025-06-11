"use client";
import { useChain, useSwitchChain } from "@thirdweb-dev/react";

export default function NetworkSelector() {
  const chain = useChain();
  const switchChain = useSwitchChain();

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label style={{ marginRight: "0.5rem" }}>Wybierz testową sieć:</label>
      <select
        value={chain?.chainId || ""}
        onChange={(e) => switchChain(Number(e.target.value))}
      >
        <option value={11155111}>Sepolia (Ethereum)</option>
        <option value={97}>BSC Testnet</option>
      </select>
    </div>
  );
}
