(function(exports) {
  function expect(x) {
    return {
      toEqual: function(y) {
        if (x !== y) {
        return `FAIL: ${object} is not equal to ${check}`;
        }
      },
      toNotEqual: function(x) {
        if (x === y) {
        return `FAIL: ${object} is NOT not equal to ${check}...?!?!`;
        }
      },
      toBeTrue: function() {
        if (x !== true) {
        return `FAIL: ${object} is not true`;
        }
      },
      toNotBeTrue: function() {
        if (x === true) {
        return `FAIL: ${object} is NOT not true...?!?!`;
        }
      },
      toContain: function(y) {
        if (!x.includes(y)) {
        return `FAIL: ${object} does not contain ${content}`;
        }
      },
      toNotContain: function(y) {
        if (x.includes(y)) {
        return `FAIL: ${object} does NOT not contain ${content}...WTF?`;
        }
      },
      toBeHTMLelement: function() {
        if (this._frameDoc().getElementById(object) == null) {
          return `FAIL: HTML element ${object} does not exist`
        }
      },
      toNotBeHTMLelement: function() {
        if (this._frameDoc().getElementById(object) !== null) {
          return `FAIL: HTML element ${object} exists (but it shouldn't)`
        }
      },
      toHaveHTMLcontent: function(y) {
        if (!this._frameDoc().getElementById(x).innerHTML.includes(y)) {
          return `FAIL: HTML element ${object} does not include ${text}`
        }
      },
      toBeVisible: function() {
        if (this._frameDoc().getElementById(x).style.display === "none") {
          return `FAIL: HTML element ${object} is not visible`
        }
      },
      toNotBeVisible: function() {
        if (this._frameDoc().getElementById(x).style.display !== "none") {
          return `FAIL: HTML element ${object} is visible`
        }
      }
      // private
      _frameDoc: function() {
        return document.getElementById("pageUnderTest").contentDocument;
      }
    }
  }
  exports.expect = expect;
})(this)
