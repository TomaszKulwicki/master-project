"use client";
import { useActiveWallet } from "thirdweb/react";
import { redirect } from "next/navigation";
import NFTDisplay from "../../../components/NFTDisplay";
import "../../../componentsStyles/nftdisplay.css"

export default function NFTPage() {
  const wallet = useActiveWallet();
  if (!wallet) redirect("/");
  return <NFTDisplay />;
}