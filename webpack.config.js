var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var inProduction = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash].bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src',
    watchContentBase: true,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      { // esta regla nos permite importar ficheros .css
        test: /\.css$/,
        use: [
          'style-loader', // lo inyecta en nuestro header automáticamente
          'css-loader' // importará los ficheros
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // excluimos node_modules para que no lo transpile
        loader: 'babel-loader'
      }
    ]
  }
}

// Si estamos en modo producción (npm run build)
// webpack optimizará y comprimirá nuestro código para reducir el tamaño de los archivos
if (inProduction) {
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin())
}
