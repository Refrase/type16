const route = {

  path: 'projects/:projectId',
  getIndexRoute(location, callback) {

    callback(null, require('./indexRoute').default);

  },

};

export default route;
