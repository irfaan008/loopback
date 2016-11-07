// Copyright IBM Corp. 2013,2016. All Rights Reserved.
// Node module: loopback
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

/**
 * loopback test setup and support.
 */

'use strict';
global.assert = require('assert');
global.expect = require('chai').expect;
global.loopback = require('../');
global.memoryConnector = loopback.Memory;
global.GeoPoint = loopback.GeoPoint;
global.app = null;
global.TaskEmitter = require('strong-task-emitter');
global.request = require('supertest');
global.RemoteObjects = require('strong-remoting');

// Speed up the password hashing algorithm
// for tests using the built-in User model
loopback.User.settings.saltWorkFactor = 4;

beforeEach(function() {
  this.app = app = loopback();
});

global.assertValidDataSource = function(dataSource) {
  // has methods
  assert.isFunc(dataSource, 'createModel');
  assert.isFunc(dataSource, 'discoverModelDefinitions');
  assert.isFunc(dataSource, 'discoverSchema');
  assert.isFunc(dataSource, 'enableRemote');
  assert.isFunc(dataSource, 'disableRemote');
  assert.isFunc(dataSource, 'defineOperation');
  assert.isFunc(dataSource, 'operations');
};

assert.isFunc = function(obj, name) {
  assert(obj, 'cannot assert function ' + name + ' on object that doesnt exist');
  assert(typeof obj[name] === 'function', name + ' is not a function');
};
