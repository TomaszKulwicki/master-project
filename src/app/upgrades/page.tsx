"use client";
import { useActiveWallet } from "thirdweb/react";
import { redirect } from "next/navigation";
import Upgrades from "../../../components/Upgrades";
import "../../../componentsStyles/upgrades.css"

export default function UpgradesPage() {
  const wallet = useActiveWallet();
  if (!wallet) redirect("/");
  return <Upgrades />;
}