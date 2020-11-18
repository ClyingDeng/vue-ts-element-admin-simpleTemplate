// vue.config.js
// const webpack = require('webpack');
const path = require('path');
module.exports = {
  transpileDependencies: ['vue-class-component'],
  // pluginOptions: {
  //   'style-resources-loader': {
  //     preProcessor: 'scss',
      // patterns: [
      //   path.resolve(__dirname, 'src/styles/_variables.scss'),
      //   path.resolve(__dirname, 'src/styles/_mixins.scss')
      // ]
  //   }
  // },
  chainWebpack: config => {
    config
      .entry('index')
      .add('@babel/polyfill')
      .end();
    const scssRes = config.module.rule('scss').oneOfs.store;
    scssRes.forEach(item => {
      item
      .use("sass-resource-loader")
        .loader('sass-resources-loader')
        .options({
          resources: [
            path.resolve(__dirname, 'src/styles/_variables.scss'),
            path.resolve(__dirname, 'src/styles/_mixins.scss')
          ]
        }).end();
    })
  },
  publicPath: '/admin',
  outputDir: "dist",
  assetsDir: 'static',
  devServer: {
    port: 8085,
    https: false,
    open: true
  }
}