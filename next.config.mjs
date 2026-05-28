/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        outputFileTracingIncludes: {
            '/api/download': ['./private/**/*'],
        },
    },
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