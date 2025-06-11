"use client";
import { useWallet } from "@thirdweb-dev/react";
import { redirect } from "next/navigation";
import Shop from "../../../components/Shop";
import "../../../componentsStyles/shop.css"

export default function ShopPage() {
  const wallet = useWallet();
  if (!wallet) redirect("/");
  return <Shop />;
}