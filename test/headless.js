global.window = global;
global.assert = require('chai').assert;
global.fixtures = {
  users: require('../data/laboratoria.json'),
};
require('../src/data');
require('./data.spec.js');
