// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// const createNextIntlPlugin = require("next-intl/plugin");

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.drug-international.com",
				port: "",
				pathname: "/uploads/**",
			},
		],
		domains: ["www.drug-international.com"],
	},
};

export default withNextIntl(nextConfig);
