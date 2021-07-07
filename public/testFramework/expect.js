(function(exports) {

  function expect(object) {
    return {
      toEqual: function(check) {
        if (object !== check) {
        return `FAIL: ${object} is not equal to ${check}`;
        }
      },

      toNotEqual: function(check) {
        if (object === check) {
        return `FAIL: ${object} is NOT not equal to ${check}...?!?!`;
        }
      },

      toBeTrue: function() {
        if (object !== true) {
        return `FAIL: ${object} is not true`;
        }
      },

      toNotBeTrue: function() {
        if (object === true) {
        return `FAIL: ${object} is NOT not true...?!?!`;
        }
      },

      toContain: function(content) {
        if (!object.includes(content)) {
        return `FAIL: ${object} does not contain ${content}`;
        }
      },

      toNotContain: function(content) {
        if (object.includes(content)) {
        return `FAIL: ${object} does NOT not contain ${content}...WTF?`;
        }
      },

      toBeHtmlElement: function() {
        var frameDoc = document.getElementById("pageUnderTest").contentDocument;
        if (frameDoc.getElementById(object) == null) {
          return `FAIL: HTML element ${object} does not exist`
        }
      },

      toNotBeHtmlElement: function() {
        var frameDoc = document.getElementById("pageUnderTest").contentDocument;
        if (frameDoc.getElementById(object) !== null) {
          return `FAIL: HTML element ${object} exists (but it shouldn't)`
        }
      },

      toContainHtmlContent: function(text) {
        var frameDoc = document.getElementById("pageUnderTest").contentDocument;
        if (!frameDoc.getElementById(object).innerHTML.includes(text)) {
          return `FAIL: HTML element ${object} does not include ${text}`
        }
      },

      toBeVisible: function(text) {
        var frameDoc = document.getElementById("pageUnderTest").contentDocument;
        if (frameDoc.getElementById(object).style.display === "none") {
          return `FAIL: HTML element ${object} is not visible`
        }
      },

      toNotBeVisible: function(text) {
        var frameDoc = document.getElementById("pageUnderTest").contentDocument;
        if (frameDoc.getElementById(object).style.display !== "none") {
          return `FAIL: HTML element ${object} is visible`
        }
      }

    }
  }

  exports.expect = expect;
})(this)
