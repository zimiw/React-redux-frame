var webpack = require('webpack');
var config = require('./base');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * ouput config
 * @type {String}
 */
config.output.filename = 'js/[name].[chunkhash:6].js';
config.output.chunkFilename = 'js/[id].[chunkhash:5].js';

/**
 * devtool config
 * @type {String}
 */
config.devtool = "cheap-source-map";

/**
 * loaders config
 * @type {RegExp}
 */
config.module.loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style', 'css')
}, {
  test: /\.less$/,
  loader: ExtractTextPlugin.extract('style', 'css!less')
});

/**
 * plugins config
 * @type {[type]}
 */
config.plugins.push(
  // stataic目录下静态资源的复制
  new CopyWebpackPlugin([ {
      context: config.commonPath.rootPath,
      from: 'static/*',
      ignore: ['*.md']
    }
  ]),
  //去除重复的依赖
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  //给使用频率高的模块分配短的id
  new webpack.optimize.OccurenceOrderPlugin(),
  // 公共代码分离打包
  
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    minChunks: 3
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
  }),
  // 若要按需加载 CSS 则请注释掉该行
  new ExtractTextPlugin('css/[name].[contenthash:6].css', {
    allChunks : true
  })
);

module.exports = config;
