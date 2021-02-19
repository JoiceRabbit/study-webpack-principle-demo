const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'none',
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: path.resolve('dist')
  },
  plugins: [
    // 生成或者使用指定的html文件，将打包生成的bundle和css文件引入
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ]
}