"use client";
import { useChain, useSwitchChain } from "@thirdweb-dev/react";
import "../componentsStyles/networkSelector.css";

export default function NetworkSelector() {
  const chain = useChain();
  const switchChain = useSwitchChain();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newChainId = Number(e.target.value);
    localStorage.setItem("selectedChainId", newChainId.toString());
    switchChain(newChainId);
  };

  return (
    <div className="network-selector-container">
      <div className="network-selector-row">
        <label htmlFor="network-select">Wybierz testową sieć:</label>
        <select
          id="network-select"
          className="network-selector-select"
          value={chain?.chainId || ""}
          onChange={handleChange}
        >
          <option value={11155111}>Sepolia (Ethereum)</option>
          <option value={97}>BSC Testnet</option>
          <option value={43113}>Avalanche Fuji</option>
          <option value={80001}>Polygon Mumbai</option>
        </select>
      </div>
    </div>
  );
}
