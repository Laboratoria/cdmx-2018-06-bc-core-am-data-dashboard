global.window = global;
global.assert = require('chai').assert;
global.fixtures = {
  users: require('../data/laboratoria.json'),
};
require('../src/data');
require('./data.spec.js');

//Chai es un programa que corre dentro del proyecto para jecutar los test, por ello
//funciona el .assert, etc.