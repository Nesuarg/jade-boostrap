var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'jade-boostrap'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/jade-boostrap-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'jade-boostrap'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/jade-boostrap-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'jade-boostrap'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/jade-boostrap-production'
  }
};

module.exports = config[env];
