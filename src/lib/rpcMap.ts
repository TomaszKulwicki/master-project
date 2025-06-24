export const rpcUrls: Record<number, string> = {
  11155111: "https://rpc.sepolia.org",
  80002: "https://rpc-amoy.polygon.technology",
  43113: "https://api.avax-test.network/ext/bc/C/rpc",
};

export function getRpcUrl(chainId: number): string {
  return rpcUrls[chainId];
}

export const chainNames: Record<number, string> = {
  11155111: "Sepolia",
  80002: "Polygon Amoy",
  43113: "Avalanche Fuji",

};
