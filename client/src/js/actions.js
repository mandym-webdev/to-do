'use strict';

var Reflux = require('reflux');

var _actions = [
  'search',
  'filter',
  'selectItem',
  'backToResults',
  'newSearch',
  'itemSelected'
];

module.exports = Reflux.createActions(_actions);

