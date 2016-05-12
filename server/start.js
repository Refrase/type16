// Babel

require('babel-core/register');

// App

if (process.env.NODE_ENV === 'development') {

  require('./dev');

}
