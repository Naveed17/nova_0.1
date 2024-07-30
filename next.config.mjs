/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
                port: '',
                pathname: '/img/**',
            },
        ],
    },
    env: {
        SANITY_API_READ_TOKEN: process.env.SANITY_API_READ_TOKEN,
    },
};

export default nextConfig;
