import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  basePath: "/web-react",
  assetPrefix: "/web-react",
  output: "export",
  trailingSlash: true,
  images:{
    unoptimized: true
  }
};

export default nextConfig;
