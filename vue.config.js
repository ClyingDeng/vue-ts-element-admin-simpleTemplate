const path = require('path');
module.exports = {
  transpileDependencies: ['vue-class-component'],
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
            path.resolve(__dirname, 'src/styles/_mixins.scss'),
            path.resolve(__dirname, 'src/styles/icon.scss'),
          ]
        }).end();
    })
  },
  publicPath: '/',
  outputDir: "dist",
  assetsDir: 'static',
  devServer: {
    port: 8085,
    https: false,
    open: true
  }
}