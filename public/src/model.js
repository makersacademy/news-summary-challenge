import Guardian from './guardian-js';
'use strict';
const expect = require('expect');
const guardian = require('../src');
const guardian = new Guardian('3d1bd118-3d6f-4211-a61e-3d0f966b08bb', false);
console.log(guardian);

guardian.content.search('football',{
  tag:'sports'
})



