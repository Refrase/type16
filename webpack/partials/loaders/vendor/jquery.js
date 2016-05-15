// Making jQuery available as global variable to external scripts installed in node_modules
module.exports = {
  test: /node_modules\/.+\.(jsx|js)$/,
  loader: 'imports?jQuery=jquery,$=jquery,this=>window',
};
