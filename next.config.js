/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.module.rules.push(svgrConfig);
    config.plugins.push(new VeliteWebpackPlugin());

    return config;
  }
}

const svgrConfig = {
  test: /\.svg$/i,
  use: ['@svgr/webpack'],
}

class VeliteWebpackPlugin {
  static started = false
  apply(/** @type {import('webpack').Compiler} */ compiler) {
    // executed three times in nextjs
    // twice for the server (nodejs / edge runtime) and once for the client
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return
      VeliteWebpackPlugin.started = true
      const dev = compiler.options.mode === 'development'
      const { build } = await import('velite')
      await build({ watch: dev, clean: !dev })
    })
  }
}

module.exports = nextConfig;
