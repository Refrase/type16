// Lib

import config from './../webpack/webpack.dev';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { publicPath } from './services/publicPath';

// Const

const app = express();
const compiler = webpack(config);
const port = process.env.PORT || 3333;

// Port

app.set('port', port);

app.use(webpackDevMiddleware(compiler, {
  noInfo: false,
  quiet: false,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}));

app.use(webpackHotMiddleware(compiler));

// Set static folder

app.use(express.static(publicPath()));

// Let's go!

app.listen(app.get('port'), (err) => {

  if (err) {

    console.error(err);

  } else {

    console.info('Houston! We are live at port', app.get('port'));

  }

});
