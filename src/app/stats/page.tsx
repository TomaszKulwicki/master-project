"use client";
import { useWallet } from "@thirdweb-dev/react";
import { redirect } from "next/navigation";
import Stats from "../../../components/Stats";
import "../../../componentsStyles/stats.css"

export default function StatsPage() {
  const wallet = useWallet();
  if (!wallet) redirect("/");
  return <Stats />;
}