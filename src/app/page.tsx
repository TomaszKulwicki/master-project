"use client";

import Image from "next/image";
import { useActiveWallet } from "thirdweb/react";
import { client } from "./client";
import "../../componentsStyles/page.css"

export default function Home() {
  const wallet = useActiveWallet();
  
  return (
    <div className="main">
      {wallet ? (
        <div>
          <div className="title">Witaj w Idler Clicker!</div>
        </div>
      ) : (
        <div className="title">
          <div>Zaloguj się aby zagrać w IdleClicker!</div>
        </div>
      )}
    </div>
  );
}
