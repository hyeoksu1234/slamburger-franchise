import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "slamburger-franchise";
const assetPrefix = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: assetPrefix || undefined,
  assetPrefix: assetPrefix ? `${assetPrefix}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: assetPrefix,
  },
};

export default nextConfig;
