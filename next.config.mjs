/** @type {import('next').NextConfig} */

const nextConfig = {
    outputFileTracingIncludes: {
        '/api/download': ['./private/**/*'],
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
            {
                protocol: "https",
                hostname: "img.youtube.com",
                port: "",
                pathname: "/vi/**",
            },
            {
                protocol: "https",
                hostname: "i.ytimg.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;