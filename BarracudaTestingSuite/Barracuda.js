// Main Test App: Using Barracuda's expect and toBe
(function(exports) {
  Barracuda = {
    expect: function(a) {
      this.a = a;
      this.falsey = false;
      return this;
    },

    not: function() {
      this.falsey = true;
      return this;
    },

    toEqual: function(b) {
      if (this.a === b || (this.a !== b && this.falsey === true)) {
        this.falsey = false;
        return console.log(
          "%c passed the test",
          "color: green; font-size: 14px;"
        );
      }
      console.log(
        `%c Failure! Expected '${b}' but received '${this.a}'`,
        "color: red; font-size: 14px;"
      );
    },

    isArray: function() {
      if (
        typeof this.a === "object" ||
        (this.a !== "object" && this.falsey === true)
      ) {
        this.falsey = false;
        return console.log(
          "%c passed the test",
          "color: green; font-size: 14px;"
        );
      }
      console.log(
        `%c Failure! Expected %c'${b}' but received '${this.a}'`,
        "color: red; font-size: 14px;"
      );
    },

    toContain: function(item) {
      if (typeof this.a === "object" && this.a.includes(item)) {
        return console.log(
          "%c passed the test",
          "color: green; font-size: 14px;"
        );
      }
      console.log(
        `%c Failure! Expected '${this.a}' to contain '${item}'`,
        "color: red; font-size: 14px;"
      );
    },

    toHaveBeenCalled: function() {
      if (this.a.methodCount < 1) {
        console.log(
          `%c Failure! Expected '${this.a}' to have been called.`,
          "color: red; font-size: 14px;"
        );
      }
      return console.log(
        "%c passed the test",
        "color: green; font-size: 14px;"
      );
    },

    describe: function(message, fn) {
      console.log(
        `%c ${message}'s tests:`,
        "font-weight: bold; font-size: 2em;"
      );
      if (typeof fn === "function") {
        fn.call();
      }
    },

    it: function(message, fn) {
      console.log(
        `%c Test -- ${message} -- Test`,
        "font-style: italic; font-size: 1.2em"
      );
      if (typeof fn === "function") {
        fn.call();
      }
    }
  };
  exports.Barracuda = Barracuda;
})(this);
