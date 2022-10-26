const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // should be the same paths as in tsconfig.paths.json and craco.config.js
      src: path.resolve(__dirname, '../src'),
      assets: path.resolve(__dirname, '../src/assets'),
      utils: path.resolve(__dirname, '../src/utils'),
      types: path.resolve(__dirname, '../src/types'),
      pages: path.resolve(__dirname, '../src/pages'),
      atoms: path.resolve(__dirname, '../src/components/atoms'),
      molecules: path.resolve(__dirname, '../src/components/molecules'),
      organisms: path.resolve(__dirname, '../src/components/organisms'),
      templates: path.resolve(__dirname, '../src/components/templates'),
      contexts: path.resolve(__dirname, '../src/components/contexts'),
      services: path.resolve(__dirname, '../src/components/services'),
    };

    return config;
  },
};
