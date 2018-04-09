(function(exports) {

  function expect(arg1) {
    return {
      toEqual: function(arg2) {
        if (arg1 !== arg2) {
          return (`${arg1} is not equal to ${arg2}`);
        }
      },

      toNotEqual: function(arg2) {
        if (arg1 === arg2) {
        return `${arg1} is not different than ${arg2}`;
        }
      },

      toBeTrue: function() {
        if (arg1 !== true) {
        return `${arg1} is not true`;
        }
      },

      toBeFalse: function() {
        if (arg1 === true) {
        return `${arg1} is not false`;
        }
      },

      toContain: function(arg2) {
        if (!arg1.includes(arg2)) {
        return `${arg1} does not contain ${arg2}`;
        }
      },

      toNotContain: function(arg2) {
        if (arg1.includes(arg2)) {
        return `${arg1} contains ${arg2}`;
        }
      },

      toBeHtmlElement: function() {
        if (document.getElementById(arg1) == null) {
          return `HTML element ${arg1} does not exist`
        }
      },

      toContainHtmlText: function(arg2) {
        if (!document.getElementById(arg1).innerHTML.includes(arg2)) {
          return `HTML element ${arg1} does not include ${arg2}`
        }
      },

      toBeVisible: function(arg2) {
        if (document.getElementById(arg1).style.display === "none") {
          return `HTML element ${arg1} is not visible`
        }
      },

      toNotBeVisible: function(arg2) {
        if (document.getElementById(arg1).style.display !== "none") {
          return `HTML element ${arg1} is visible`
        }

      }
    }
  }

  exports.expect = expect;
})(this)
