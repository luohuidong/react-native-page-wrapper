/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const extraNodeModules = {
  '@luohuidong/react-native-page-wrapper': path.join(__dirname, '..'),
};
const watchFolders = [path.join(__dirname, '..')];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  // resolver: {
  //   extraNodeModules,
  // },
  // watchFolders,
};
