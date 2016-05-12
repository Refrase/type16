module.exports = {
  test: /\.scss/,
  exclude: [/node_modules/],
  loader: 'style!css?sourceMap!autoprefixer?browsers=last 2 versions!sass',
};
