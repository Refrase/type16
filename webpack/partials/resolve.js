// Lib

import path from 'path';
import paths from '../../paths';

// Config

module.exports = {
  extensions: ['', '.js', '.jsx', '.json'],
  alias: {
    components: path.join(paths.sourcePath, 'components'),
    constants: path.join(paths.sourcePath, 'constants'),
    ducks: path.join(paths.sourcePath, 'redux', 'ducks'),
    images: path.join(paths.staticPath, 'images'),
    routes: path.join(paths.sourcePath, 'routes'),
    services: path.join(paths.sourcePath, 'services'),
    styles: path.join(paths.sourcePath, 'styles'),
    utils: path.join(paths.sourcePath, 'utils'),
  },
};
