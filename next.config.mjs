/**
 * @Reference {@link https://velite.js.org/guide/with-nextjs#%F0%9F%8E%8A-start-velite-with-next-js-config-%F0%9F%86%95}
 */
const isDev = process.argv.indexOf('dev') !== -1;
const isBuild = process.argv.indexOf('build') !== -1;
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = '1';
  const { build } = await import('velite');
  await build({ watch: isDev, clean: !isDev });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push(svgrConfig);

    return config;
  },
};

const svgrConfig = {
  test: /\.svg$/i,
  use: ['@svgr/webpack'],
};

export default nextConfig;
