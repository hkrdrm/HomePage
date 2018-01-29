let baseConfig = require('./base')
const webpack = require('webpack')
const { resolve } = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  devtool: 'cheap-module-eval-source-map',
  
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://' + require("ip").address()  + ':8081',
    'webpack/hot/only-dev-server',
    './main.js',
    './assets/scss/main.scss',
  ],

  devServer: {
    hot: true,
    port: 8080,
    historyApiFallback: true,
    contentBase: resolve('./', 'build'),
    publicPath: '/',
    public: "ftc.dev-server:8081"
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.(js|jsx)$/,
      options: {
        eslint: {
          configFile: resolve('./', '.eslintrc'),
          cache: false,
        }
      },
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin({ filename: './styles/style.css', disable: false, allChunks: true }),
    new CopyWebpackPlugin([{ from: 'vendors', to: 'vendors' }]),
    //new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    new webpack.HotModuleReplacementPlugin(),
  ],
})

module.exports = config
