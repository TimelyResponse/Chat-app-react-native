/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path')
const blacklist = require('metro-config/src/defaults/blacklist')

const moduleRoot = path.resolve(__dirname, '..')

module.exports = {
  watchFolders: [moduleRoot],
  resolver: {
    extraNodeModules: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-native': path.resolve(__dirname, 'node_modules/react-native'),
      'react-native-get-random-values': path.resolve(
        __dirname,
        'node_modules/react-native-get-random-values'
      ),
      'react-native-safe-area-context': path.resolve(
        __dirname,
        'node_modules/react-native-safe-area-context'
      ),
    },
    blacklistRE: blacklist([
      new RegExp(`${moduleRoot}/node_modules/react/.*`),
      new RegExp(`${moduleRoot}/node_modules/react-native/.*`),
      new RegExp(
        `${moduleRoot}/node_modules/react-native-get-random-values/.*`
      ),
      new RegExp(
        `${moduleRoot}/node_modules/react-native-safe-area-context/.*`
      ),
    ]),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
}
