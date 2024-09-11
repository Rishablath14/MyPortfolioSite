/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        // Add a rule to handle .glb/.gltf files
        config.module.rules.push({
          test: /\.(glb|gltf)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000, // Set a limit to inline the asset as a Data URL
                fallback: 'file-loader', // Fallback to file-loader for larger assets
                publicPath: '/_next/static/assets/', // Path to serve from
                outputPath: 'static/assets/', // Output directory for assets
                name: '[name].[hash].[ext]',
              },
            },
          ],
        });
    
        return config;
      },
};

export default nextConfig;
