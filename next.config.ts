import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // This is the line you need to add
  output: 'export',
  
  // This part is needed to make next/image work with a static export
  images: {
    loader: 'default',
    unoptimized: true, 
  },
};

export default nextConfig;
