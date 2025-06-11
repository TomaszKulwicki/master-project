"use client";

import { ConnectButton, useActiveWalletConnectionStatus } from "thirdweb/react";
import Link from "next/link";
import { client } from "../src/app/client";
import "../componentsStyles/navbar.css";

export default function Navbar() {
  const connectionStatus = useActiveWalletConnectionStatus();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link href="/">Blockchain Clicker</Link>
        { connectionStatus === "connected" && (
          <>
            |<Link href="/shop">Sklep</Link>|
            <Link href="/upgrades">Ulepszenia</Link>|
            <Link href="/stats">Statystyki</Link>|
            <Link href="/nft">Twoje NFT</Link> |
            <Link href="/settings">Ustawienia</Link>
          </>
          )}
        </div>
        
        <ConnectButton
        client={client}
        theme="dark"
        appMetadata={{
        name: "Blockchain Clicker",
        url: "http://localhost:3000",
        }}
      />
    </nav>
  );
}
