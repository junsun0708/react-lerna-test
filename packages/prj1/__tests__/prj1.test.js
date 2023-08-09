'use strict';

const prj1 = require('..');
const assert = require('assert').strict;

assert.strictEqual(prj1(), 'Hello from prj1');
console.info('prj1 tests passed');
