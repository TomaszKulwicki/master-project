"use client";
import { useWallet } from "@thirdweb-dev/react";
import { redirect } from "next/navigation";
import NFTDisplay from "../../../components/Settings";
import "../../../componentsStyles/nftdisplay.css"

export default function Settings() {
  const wallet = useWallet();
  if (!wallet) redirect("/");
  return <NFTDisplay />;
}