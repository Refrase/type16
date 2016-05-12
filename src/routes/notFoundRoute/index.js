// This route: *

const route = {
  path: '*',
  getComponent(location, callback) {

    require.ensure([], (require) => {

      callback(null, require('./components/Container').default);

    });

  },
};

export default route;
