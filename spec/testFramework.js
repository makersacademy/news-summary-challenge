"use strict";

function expectToEqual(actual, expected, message) {
  console.log(message);
  actual === expected ? 
  console.log("%c pass", 'background: #222; color: #32cd32') :
  console.log("%c fail", 'background: #222; color: #ff3131');
}

function expectNotToEqual(actual, expected, message) {
  console.log(message);
  actual !== expected ? 
  console.log("%c pass", 'background: #222; color: #32cd32') :
  console.log("%c fail", 'background: #222; color: #ff3131');
}

function expectToThrowError(actual, message) {
  console.log(message);
  let errorStatus = false;
  try {
    actual();
  } catch (error) {
    errorStatus = true;
  }
    errorStatus === true ? 
    console.log("%c pass: no error was thrown", 'background: #222; color: #32cd32') : 
    console.log("%c fail: error was thrown", 'background: #222; color: #ff3131');
}

function expectNotToThrowError(actual, message) {
  console.log(message);
  let errorStatus = false;
  try {
    actual();
  } catch (error) {
    errorStatus = true;
  }
    errorStatus === false ? 
    console.log("%c pass: error was thrown", 'background: #222; color: #32cd32') :
    console.log("%c fail: no error was thrown", 'background: #222; color: #ff3131');
}
