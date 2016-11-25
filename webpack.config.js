var path = require('path')
var yeticss = require('yeticss')

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname, 'js'),
  entry: './app',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.styl$/,
        loaders: ['style', 'css', 'stylus']
      }
    ]
  },
  stylus: {
    use: [yeticss()]
  },
  devServer: { inline: true }
}
