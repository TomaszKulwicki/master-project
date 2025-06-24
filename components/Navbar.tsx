"use client";

import {
  useConnect,
  useDisconnect,
  useWallet,
  useConnectionStatus,
  metamaskWallet,
  coinbaseWallet,
} from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import "../componentsStyles/navbar.css";

export default function Navbar() {
  const connect = useConnect();
  const disconnect = useDisconnect();
  const wallet = useWallet();
  const status = useConnectionStatus();
  const isConnected = status === "connected";

  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    async function loadAddress() {
      if (wallet) {
        const addr = await wallet.getAddress();
        setAddress(addr);
      }
    }
    loadAddress();
  }, [wallet]);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link href="/">Blockchain Clicker</Link>
        {isConnected && (
          <>
            |<Link href="/shop">Sklep</Link>|
            <Link href="/upgrades">Ulepszenia</Link>|
            <Link href="/stats">Statystyki</Link>|
            <Link href="/nft">Twoje NFT</Link>|
            <Link href="/settings">Ustawienia</Link>|
            Wybrana sieć: 
          </>
        )}
      </div>

      <div className="navbar-right">
        {isConnected ? (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span>Połączono: {address.slice(0, 6)}...{address.slice(-4)}</span>
            <button onClick={disconnect}>Rozłącz</button>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button onClick={() => connect(metamaskWallet())}>Metamask</button>
          </div>
        )}
      </div>
    </nav>
  );
}
