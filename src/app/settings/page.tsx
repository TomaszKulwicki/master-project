"use client";
import { useActiveWallet } from "thirdweb/react";
import { redirect } from "next/navigation";
import NFTDisplay from "../../../components/Settings";
import "../../../componentsStyles/nftdisplay.css"

export default function Settings() {
  const wallet = useActiveWallet();
  if (!wallet) redirect("/");
  return <NFTDisplay />;
}