"use client";
import { useWallet } from "@thirdweb-dev/react";
import { redirect } from "next/navigation";
import Upgrades from "../../../components/Upgrades";
import "../../../componentsStyles/upgrades.css"

export default function UpgradesPage() {
  const wallet = useWallet();
  if (!wallet) redirect("/");
  return <Upgrades />;
}