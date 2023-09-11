/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'authApp',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './ButtonAuth': './components/ButtonDemo.tsx',
        },
        shared: {
          // whatever else
        },
      })
    );

    return config;
  },
};