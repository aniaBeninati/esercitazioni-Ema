// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "rickandmortyapi.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "is1-ssl.mzstatic.com",
          pathname: "/**",
        },
      ],
    },
  };
  
  export default nextConfig;
  