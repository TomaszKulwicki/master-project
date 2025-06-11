"use client";
import { useWallet } from "@thirdweb-dev/react";
import { redirect } from "next/navigation";
import NFTDisplay from "../../../components/NFTDisplay";
import "../../../componentsStyles/nftdisplay.css"

export default function NFTPage() {
  const wallet = useWallet();
  if (!wallet) redirect("/");
  return <NFTDisplay />;
}