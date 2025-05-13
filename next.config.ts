import type { NextConfig } from "next";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "node_modules", "feather-icons", "dist", "feather-sprite.svg"),
            to: path.resolve(__dirname, "src", "public", "icons.svg")
          }
        ]
      })
    )

    return config;
  },
  async redirects() {
    return [{
      source: "/",
      destination: "/achievements",
      permanent: true
    }]
  }
};

export default nextConfig;
