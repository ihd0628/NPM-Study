#!/usr/bin/env node

const greeting = require('./main');
console.log(process.argv[2]);
console.log('Greeting: ', greeting[process.argv[2]]);