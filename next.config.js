/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push(svgrConfig);

    if (config.mode === 'development') {
      config.plugins.push(new VeliteWebpackPlugin());
    }

    return config;
  },
};

const svgrConfig = {
  test: /\.svg$/i,
  use: ['@svgr/webpack'],
};

/**
 * TODO: @svgr/webpack 사용하고 있어서 새로운 방식의 Velite-Next.js 연결을 사용 못함.
 * @Reference {@link https://velite.js.org/guide/with-nextjs#%F0%9F%8E%8A-start-velite-with-next-js-config-%F0%9F%86%95}
 */
class VeliteWebpackPlugin {
  static started = false;
  apply(/** @type {import('webpack').Compiler} */ compiler) {
    // executed three times in nextjs
    // twice for the server (nodejs / edge runtime) and once for the client
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === 'development';
      const { build } = await import('velite');
      await build({ watch: dev, clean: !dev });
    });
  }
}

module.exports = nextConfig;
