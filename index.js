#!/usr/bin/env node
const {isOldNode} = require('./src/utils');

if (isOldNode()) {
  console.log();
  console.log('Looks like your Node version is too old.');
  console.log('Please, upgrade to v6.0+ and try again');
  console.log();
  process.exit(1);
}

require('./src/createApp');
