(function(exports) {
  function expect(x) {
    return {
      toEqual: function(y) {
        if (x !== y) {
        return `FAIL: ${x} is not equal to ${y}`;
        }
      },
      toNotEqual: function(x) {
        if (x === y) {
        return `FAIL: ${object} is equal to ${y}`;
        }
      },
      toBeTrue: function() {
        if (x !== true) {
        return `FAIL: ${x} is not true`;
        }
      },
      toNotBeTrue: function() {
        if (x === true) {
        return `FAIL: ${x} is true`;
        }
      },
      toContain: function(y) {
        if (!x.includes(y)) {
        return `FAIL: ${x} does not contain ${y}`;
        }
      },
      toNotContain: function(y) {
        if (x.includes(y)) {
        return `FAIL: ${x} contains ${y}`;
        }
      },
      toBeHTMLelement: function() {
        if (this._frameDoc().getElementById(x) == null) {
          return `FAIL: HTML element ${x} does not exist`
        }
      },
      toNotBeHTMLelement: function() {
        if (this._frameDoc().getElementById(x) !== null) {
          return `FAIL: HTML element ${x} exists (but it shouldn't)`
        }
      },
      toHaveHTMLcontent: function(y) {
        if (!this._frameDoc().getElementById(x).innerHTML.includes(y)) {
          return `FAIL: HTML element ${x} does not include ${y}`
        }
      },
      toBeVisible: function() {
        if (this._frameDoc().getElementById(x).style.display === "none") {
          return `FAIL: HTML element ${x} is not visible`
        }
      },
      toNotBeVisible: function() {
        if (this._frameDoc().getElementById(x).style.display !== "none") {
          return `FAIL: HTML element ${x} is visible`
        }
      },
      // private
      _frameDoc: function() {
        return document.getElementById("pageUnderTest").contentDocument;
      }
    }
  }
  exports.expect = expect;
})(this)
