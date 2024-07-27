/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['fakestoreapi.com'],
    },
    env: {
        SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN,
    },
};

export default nextConfig;
