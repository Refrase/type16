const route = {

  path: 'type16',
  getIndexRoute(location, callback) {

    callback(null, require('./indexRoute').default);

  },

};

export default route;
