import paths from './../../paths';

export function publicPath() {
  switch(process.env.NODE_ENV) {
    case 'production' :
      return paths.publicPathProduction;

    case 'development' :
      return paths.publicPathDevelopment;

    case 'staging' :
      return paths.publicPathStaging;
  }
}
