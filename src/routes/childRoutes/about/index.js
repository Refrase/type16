const route = {

  path: 'about',
  getIndexRoute(location, callback) {

    callback(null, require('./indexRoute').default);

  },

};

export default route;
