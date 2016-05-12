// Lib

const path = require('path');

// Export

module.exports = {
  basePath: path.join(__dirname),
  buildPath: path.join(__dirname, 'build'),
  modulesPath: path.join(__dirname, 'node_modules'),
  publicPathDevelopment: path.join(__dirname, 'public', 'development'),
  publicPathProduction: path.join(__dirname, 'public', 'production'),
  publicPathStaging: path.join(__dirname, 'public', 'staging'),
  sourcePath: path.join(__dirname, 'src'),
  staticPath: path.join(__dirname, 'src', 'static'),
};
