const path = require('path');

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        views: path.resolve(__dirname, 'src/components/'),
        actions: path.resolve(__dirname, 'src/store/actions'),
        utils: path.resolve(__dirname, 'src/utils'),
        css: path.resolve(__dirname, 'src/assets/css'),
        js: path.resolve(__dirname, 'src/assets/js'),
      }
    }
  }
};
