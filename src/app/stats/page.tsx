"use client";
import { useActiveWallet } from "thirdweb/react";
import { redirect } from "next/navigation";
import Stats from "../../../components/Stats";
import "../../../componentsStyles/stats.css"

export default function StatsPage() {
  const wallet = useActiveWallet();
  if (!wallet) redirect("/");
  return <Stats />;
}