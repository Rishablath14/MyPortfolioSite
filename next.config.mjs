/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      // Avoid Netlify sharp/IPX dependency for local static assets.
      unoptimized: true,
    },
    webpack: (config) => {
        // Use webpack asset modules for .glb/.gltf files.
        config.module.rules.push({
          test: /\.(glb|gltf)$/,
          type: "asset/resource",
          generator: {
            filename: "static/assets/[name].[hash][ext]",
          },
        });

        return config;
      },
};

export default nextConfig;
