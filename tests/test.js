'use strict';

// Tests wrapped in a module pattern
(function(exports) {
  // The 'it' label function:
  function it(desc, callback) {
    try {
      callback();
      testResult(`Test: ${desc}...`);
      testResult('Passed 🥳');
    } catch(error) {
      testResult('\n');
      testResult(`Test: ${desc}...`);
      testResult('Failed 😭');
      console.error(error);
    }
  }
  // The 'expect' label function:
  function expect(a) {
    return {

      toEqual: function(b) {
        if (a !== b) {
          throw `EXPECTED ${a} TO EQUAL ${b}`;
        }
      },

      toBeAnArray: function() {
        if (!(a.notes instanceof Array)) {
          throw `EXPECTED ${a} TO BE AN ARRAY`;
        }
      },

      toBeTrue: function() {
        if (!a) {
          throw `${a} IS NOT TRUTHY`;
        }
      }
    }
  }

  const page = document.getElementById('tests')

  function testResult(result) {
    page.innerHTML += `<p>${result}</p>`
  }

  exports.it = it;
  exports.expect = expect;
})(this);
