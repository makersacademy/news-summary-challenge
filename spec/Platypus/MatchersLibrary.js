
var assert = {
  isTrue: function (assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error(assertionToCheck + " is not truthy!")
    } else if (!!assertionToCheck) {
      console.log("All beaks are green!")
    }
  }
};

function expect(subject) {
  return new Test(subject);
}

var divCount = 1;
var descString;
var itString;

function describe(string, callback){
  console.log("%c**** " + string + " ***", 'background: #efacdd');
  // document.write(`<div class="desc" id="desc${divCount}">${string}</div>`);
  descString = string

  callback();
}

function it(string, callback){
  // TODO: work out how to append it divs to their describe div and err divs
  // to their it divs. This will mean we can change the styling of failing
  // describes and its so they go reddish when they contain an Error
  itString = string;


  beforeEach(beforeEachFunction);
  console.log(string);
  callback();
  console.log("%cAll beaks are green!", 'color: #30a337')
}

var beforeEachFunction;

function beforeEach(callback) {
  beforeEachFunction = callback;
  if (callback) {
    callback();
  }
};

function displayNoError() {
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

function Test(subject) {
  this.subject = subject
  this.secretSquirrel = false
}


Test.prototype = {

  not: function() {
    this.secretSquirrel = true
    return this
  },

  toBe: function(expectation) {
    if (this.secretSquirrel === false) {
      if (this.subject !== expectation) {
        displayError(new Error(`${this.subject} is not equal to ${expectation}`));
      } else {
        displayNoError();
      }
    } else {
      if (this.subject === expectation) {
        displayError(new Error(`${this.subject} is equal to ${expectation}`));
      } else {
        displayNoError();
      }
    }
  },

  toMatchArray: function(expectation) {
    if(this.secretSquirrel === false) {
      if ( !Array.isArray(this.subject) || !Array.isArray(expectation) ) {
        displayError(new Error("One or more of these elements is not an array"))
      } else if (this.subject.length !== expectation.length) {
        console.log(this.subject)
        displayError(new Error(`${this.subject} is not the same length as ${expectation}!`));
      } else {
        for (i = 0; i < this.subject.length; i++) {
          if (this.subject[i] !== expectation[i]) {
            displayError(new Error (`${this.subject} does not match ${expectation}!`))
          }
        }
        displayNoError();
      }

    } else {
      if ( !Array.isArray(this.subject) || !Array.isArray(expectation) ) {
        displayError(new Error(`One or more of these elements is not an array`))
      } else if (this.subject.length === expectation.length) {
        for (i = 0; i < this.subject.length; i++) {
          if (this.subject[i] === expectation[i]) {
            displayError(new Error ("Arrays are equal"))
          }
        }
        displayNoError();
      }
    }
  },

};
