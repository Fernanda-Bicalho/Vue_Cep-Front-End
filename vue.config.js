const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(true), 
      }),
    ],
  },

  devServer: {
    port: 8080, 
  },
});



