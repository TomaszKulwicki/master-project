"use client";
import { useActiveWallet } from "thirdweb/react";
import { redirect } from "next/navigation";
import Shop from "../../../components/Shop";
import "../../../componentsStyles/shop.css"

export default function ShopPage() {
  const wallet = useActiveWallet();
  if (!wallet) redirect("/");
  return <Shop />;
}