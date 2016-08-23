// This route: /projects (landingpage)

const route = {
  getComponent(location, cb) {

    require.ensure([], (require) => {

      cb(null, require('./components/Container').default);

    });

  },
};

export default route;
