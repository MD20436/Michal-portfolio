import type { NextConfig } from "next";

const repo = "Michal-portfolio";
const isGh = process.env.GITHUB_ACTIONS;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGh ? `/${repo}` : "",
  assetPrefix: isGh ? `/${repo}/` : "",

};

export default nextConfig;
