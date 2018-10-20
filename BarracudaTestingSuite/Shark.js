// A Spy Add-on to the beautiful barracuda framework
(function(exports) {
  class Shark {
    constructor(className) {
      this.className = className;
      this.methodCallCount = 0;
    }
  }

  Shark.prototype.eat = function(method) {
    this.method = method;
  };

  Shark.prototype.attack = function() {
    this.methodCallCount++;
    return this.method;
  };

  /* An Example of Usage:
  let note = "hello!";
  let doubleNote = new Shark(note);
  doubleNote.eat("hello!");
  console.log(doubleNote.attack()); */

  exports.Shark = Shark;
})(this);
