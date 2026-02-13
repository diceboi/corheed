/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "secure.gravatar.com",
                port: "",
                pathname: "/avatar/**",
            },
            {
                protocol: "https",
                hostname: "blog.coreheed.hu",
                port: "",
                pathname: "/wp-content/**",
            },
        ],
    },
};

export default nextConfig;