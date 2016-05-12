module.exports = {
  test: /\.(png|jpg|gif|svg)$/,
  exclude: [/node_modules/],
  loader: 'url-loader?limit=10000',
};
