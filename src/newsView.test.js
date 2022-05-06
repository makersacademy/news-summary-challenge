/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const { isTypedArray } = require('util/types');
 const newsView = require('./newsView')

 describe('newsView', () => {
   
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  xit('displays a title', () => {

  })
 })