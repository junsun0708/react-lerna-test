'use strict';

const public = require('..');
const assert = require('assert').strict;

assert.strictEqual(public(), 'Hello from public');
console.info('public tests passed');
