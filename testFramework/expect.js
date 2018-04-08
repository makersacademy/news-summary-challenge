(function(exports) {

  function expect(object) {
    return {
      toEqual: function(check) {
        if (object !== check) {
        return `Error: ${object} is not equal to ${check}`;
        }
      },

      toNotEqual: function(check) {
        if (object === check) {
        return `Error: ${object} is equal to ${check}`;
        }
      },

      toBeTrue: function() {
        if (object !== true) {
        return `Error: ${object} is not true`;
        }
      },

      toNotBeTrue: function() {
        if (object === true) {
        return `Error: ${object} is true`;
        }
      },

      toContain: function(content) {
        if (!object.includes(content)) {
        return `Error: ${object} does not contain ${content}`;
        }
      },

      toNotContain: function(content) {
        if (object.includes(content)) {
        return `Error: ${object} contains ${content}`;
        }
      },

      toBeHtmlElement: function() {
        var frameDoc = document.getElementById("pageUnderTest").contentDocument;
        if (frameDoc.getElementById(object) == null) {
          return `Error: HTML element ${object} does not exist`
        }
      },

      toNotBeHtmlElement: function() {
        var frameDoc = document.getElementById("pageUnderTest").contentDocument;
        if (frameDoc.getElementById(object) !== null) {
          return `Error: HTML element ${object} exists`
        }
      },

      toContainHtmlContent: function(text) {
        var frameDoc = document.getElementById("pageUnderTest").contentDocument;
        if (!frameDoc.getElementById(object).innerHTML.includes(text)) {
          return `Error: HTML element ${object} does not include ${text}`
        }
      },

      toBeVisible: function(text) {
        var frameDoc = document.getElementById("pageUnderTest").contentDocument;
        if (frameDoc.getElementById(object).style.display === "none") {
          return `Error: HTML element ${object} is not visible`
        }
      },

      toNotBeVisible: function(text) {
        var frameDoc = document.getElementById("pageUnderTest").contentDocument;
        if (frameDoc.getElementById(object).style.display !== "none") {
          return `Error: HTML element ${object} is visible`
        }
      }

    }
  }

  exports.expect = expect;
})(this)
