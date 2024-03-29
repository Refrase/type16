// Root

const route = {
  component: 'div',
  childRoutes: [
    {
      path: '/',
      component: require('./components/App').default,
      getIndexRoute(location, callback) {

        callback(null, require('./indexRoute').default);

      },
      getChildRoutes(location, callback) {

        callback(null, [
          require('./childRoutes/type16').default,
          require('./childRoutes/project').default,
          require('./notFoundRoute').default,
        ]);

      },
    },
  ],
};

export default route;
