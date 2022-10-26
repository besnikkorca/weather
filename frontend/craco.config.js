// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { pathsToModuleNameMapper } = require('ts-jest');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { compilerOptions } = require('./tsconfig.paths.json');

module.exports = {
  webpack: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      assets: path.resolve(__dirname, 'src/assets'),
      utils: path.resolve(__dirname, 'src/utils'),
      types: path.resolve(__dirname, 'src/types'),
      pages: path.resolve(__dirname, 'src/pages'),
      atoms: path.resolve(__dirname, 'src/components/atoms'),
      molecules: path.resolve(__dirname, 'src/components/molecules'),
      organisms: path.resolve(__dirname, 'src/components/organisms'),
      templates: path.resolve(__dirname, 'src/components/templates'),
      contexts: path.resolve(__dirname, 'src/components/contexts'),
      services: path.resolve(__dirname, 'src/components/services'),
    },
  },
  jest: {
    configure: {
      preset: 'ts-jest',
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
      }),
    },
  },
};
