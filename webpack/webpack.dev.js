// Imports

import webpack from 'webpack';

// Loaders

import jqueryLoader from './partials/loaders/vendor/jquery';
import assetsLoader from './partials/loaders/scripts';
import scriptsLoader from './partials/loaders/scripts';
import stylesLoader from './partials/loaders/styles';

// Resolve

import resolve from './partials/resolve';

// Constants/Paths

import paths from '../paths';

// Config

const config = {
  entry: [
    'webpack-hot-middleware/client',
    './src/main.js',
  ],
  output: {
    filename: 'bundle.js',
    path: paths.publicPathDevelopment,
    publicPath: '/',
  },
  cache: true,
  debug: true,
  stats: {
    colors: true,
    reasons: true,
  },
  resolve,
  module: {
    loaders: [
      jqueryLoader,
      assetsLoader,
      scriptsLoader,
      stylesLoader,
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __STAGING__: null,
      __PRODUCTION__: null,
    }),
  ],
};

// Export

export default config;
