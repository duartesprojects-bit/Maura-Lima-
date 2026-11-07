import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/servicos/:slug.html',
        destination: '/servicos/:slug',
      },
      {
        source: '/index.html',
        destination: '/',
      },
    ];
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }

    // Support .jxl image files in next-image-loader
    const addJxlToImageRules = (rules: unknown[]) => {
      for (const rule of rules) {
        if (!rule || typeof rule !== 'object') continue;
        const r = rule as { oneOf?: unknown[]; loader?: string; test?: RegExp };
        if (r.oneOf && Array.isArray(r.oneOf)) {
          addJxlToImageRules(r.oneOf);
        }
        if (r.loader && String(r.loader).includes('next-image-loader') && r.test instanceof RegExp) {
          r.test = /\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg|jxl)$/i;
        }
      }
    };
    if (config.module?.rules && Array.isArray(config.module.rules)) {
      addJxlToImageRules(config.module.rules);
    }

    return config;
  },
};

export default nextConfig;
