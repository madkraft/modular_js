var path = require('path')

module.exports = {
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
      }
    ]
  }
}
