'use strict';

var assert = {
  isTrue: function (assertion) {
    if (!assertion) {
      throw new Error(assertion + 'is undefined')
    }
    else if (!!assertion) {
      console.log('passing')
    }
  }
}

function expect(object) {
  return new Test(object)
}

function describe(string, callback){
  console.log("%c**** " + string + " ***", 'background: #efacdd')
  describeString = string
  callback()
}

function it(string, callback){
  itString = string
  beforeEach(beforeEachFunction)
  console.log(string)
  callback()
  console.log("%working it statements", 'color: #30a337')
}

var beforeEach(beforeEachFunction)
  beforeEachFunction = callback
  if(callback) {
    callback()
  }

function displayPass() {
  document.write(`<div class="desc" id="desc${divCount}">${descString}</div>`)
  document.write(`<div class="it" id="it${divCount}">${itString}</div>`);
  divCount ++;
}

var err;

function displayError(err) {
  document.write(`<div class="desc-err" id="desc${divCount}">${descString}</div>`);
  document.write(`<div class="it-err" id="it${divCount}">${itString}</div>`);
  document.write(`<div class="err-header">${err}</div>`)
  var stackRegEx = err.stack.match(/[\w-]+\.[\w-]+\:\w*/g);
  for (i = 1; i < stackRegEx.length; i++) {
    var errStackElement = `<div class="err-stack">${stackRegEx[i]}</div>`
    document.write(`<div class="err-stack">${stackRegEx[i]}</div>`)
  }
  divCount ++;
}

function Test(subject){
  this.subject = subject
  this.notMatcher = false
}

Test.prototype = {

  not: function(){
    this.notMatcher = true
    return this
  },

  toEqual: function(expectation){
    if (this.notMatcher === false){
      if (this.object !== expectation) {
        displayError(new Error(`${this.subject} is not equal to ${expectation}`))
      }
      else {
        displayPass()
      }
    }
    else {
      if (this.object === expectation){
        displayError(new Error(`${this.subject} is equal to ${expectation}`))
      }
      else{
        displayPass()
      }
    }
  },

  toEqualArray: function(expectation){
    if (!Array.isArray(this.subject) || !Array.isArray(expectation)){
      if (!Array.isArray(this.subject)){
        displayError(new Error(`${this.subject} is not an array`))
      }
      else{
        displayError(new Error(`${expectation} is not an array`))
      }
    }
    else {
      if (this.notMatcher === false){
        if (this.subject.length !== expectation){
        displayError(new Error('The two arrays are different lengths'))
        }
        else {
          for (i = 0; i < this.subject.length; i++) {
            if (this.subject[i] !== expectation[i]) {
              displayError(new Error (`expected ${expectation} but got ${this.subject}`))
            }
          }
        }
      displayNoError()
      }
      else if (this.notMatcher === true){
        if (this.subject.length === expectation.length){
          for (i = 0; i < this.subject.length; i++) {
            if (this.subject[i] === expectation[i]) {
              displayError(new Error (`${expectation} is equal to ${this.subject}`))
            }
          }
        }
       displayNoError()
      }
    }
  }
}
