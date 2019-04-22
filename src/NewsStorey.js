// So the first bit of code that I am writing is the note module-object (TDD'd)
(function(exports) {
  //naming the object.
  function NewsStorey(text) {
    // instantiating the object with the argument which was passed in.
    this.aText = text;
  }
  // making a prototype / method on the object.
  NewsStorey.prototype.returnStoreyText = function() {
    // which returns the object
    return this.aText;
  };
  exports.NewsStorey = NewsStorey;
})(this);
