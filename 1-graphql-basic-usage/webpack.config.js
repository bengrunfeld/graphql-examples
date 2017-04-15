let path = require('path')

process.noDeprecation = true
// Added because -> https://github.com/webpack/loader-utils/issues/56

module.exports = {
  entry: './src/js/app',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
}
