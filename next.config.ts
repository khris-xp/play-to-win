import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
		domains: ["localhost"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
			{
				protocol: "http",
				hostname: "127.0.0.1",
				port: "3000",
				pathname: "/images/**",
			},
		],
	},
};

export default nextConfig;
