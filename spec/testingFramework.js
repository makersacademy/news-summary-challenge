"use strict";

let i = 0; // listCounter - for 'describe' blocks
let j = 0; // subListCounter - for 'it' blocks
// let k = 0; // subSubListCounter - for test text 

function addHTMLelement(HTMLtype, HTMLid, HTMLparent, text) {
  let HTMLObject = document.createElement(HTMLtype);
  HTMLObject.id = HTMLid;
  let HTMLObjectText = document.createTextNode(text);
  HTMLObject.appendChild(HTMLObjectText);
  let parent = document.getElementById(HTMLparent);
  parent.appendChild(HTMLObject);
}

function describeClass(label, callback) {
  addHTMLelement('h3', `class-headers`, 'main', label);
  callback();
}

function describe(label, callback) {
  i++;
  addHTMLelement('ul', `listA${i}`, 'main', label);
  callback();
}

function it(label, callback) {
  j++;
  addHTMLelement('ul', `listB${j}`, `listA${i}`, label);
  callback();
}

function expect(actual) {
  return {
    toEqual: function(expected) {
      if(actual !== expected) {
        addHTMLelement('li', 'fail-test-message', `listB${j}`, `Fail! Expected ${actual} to equal ${expected}`)
      }
      else {
        addHTMLelement('li', 'pass-test-message', `listB${j}`, `Pass!`)
      }
    },

    notToEqual: function(expected) {
      if(actual === expected) {
        addHTMLelement('li', 'fail-test-message', `listB${j}`, `Fail! Expected ${actual} NOT to equal ${expected}`)
      }
      else {
        addHTMLelement('li', 'pass-test-message', `listB${j}`, `Pass!`)
      }
    },

    toContain: function(expected) {
      if(!actual.includes(expected)) {
        addHTMLelement('li', 'fail-test-message', `listB${j}`, `Fail! Expected ${actual} to include ${expected}`)
      }
      else {
        addHTMLelement('li', 'pass-test-message', `listB${j}`, `Pass!`)
      }
    },


    // Potentially not working...
    toRaiseError: function() {
      let thereWasAnError = false;
      try {
        actual;
      } catch (error) {
        thereWasAnError = true
        console.log(error)
      }
      if (thereWasAnError) {
        addHTMLelement('li', 'pass-test-message', `listB${j}`, `Pass!`)
      } else {
        addHTMLelement('li', 'fail-test-message', `listB${j}`, `Fail! Expected ${actual} to throw error`)
      }
    }
  }
}

