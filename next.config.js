// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    loader: "akamai",
    path: "/",
	output: "export",
    images: { unoptimized: true }, 
};

module.exports = nextConfig;

// const nextConfig = {
//     reactStrictMode: true,
//     images: {
//      loader: "akamai",
//      path: "/",
//     },
//  };
