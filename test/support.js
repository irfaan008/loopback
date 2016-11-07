// Copyright IBM Corp. 2013,2016. All Rights Reserved.
// Node module: loopback
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

/**
 * loopback test setup and support.
 */

'use strict';
var assert = require('assert');
var expect = require('chai').expect;
var loopback = require('../');
var memoryConnector = loopback.Memory;
var GeoPoint = loopback.GeoPoint;
var app = null;
var TaskEmitter = require('strong-task-emitter');
var request = require('supertest');
var RemoteObjects = require('strong-remoting');

// Speed up the password hashing algorithm
// for tests using the built-in User model
loopback.User.settings.saltWorkFactor = 4;

beforeEach(function() {
  this.app = app = loopback();
});

var assertValidDataSource = function(dataSource) {
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
