(function(exports) {
  function headlineMaker(headline) {
    this._headline = headline;
  };

  headlineMaker.prototype.printHeadlines = function() {
    var headDiv = document.getElementById("headlines")
    console.log("Print Headlines: ", this._headline)
    this._headline.forEach(function(story, index) {
      var h2 = document.createElement("h2")
      var titleText = document.createTextNode(story.webTitle)
      h2.id = `headline_${index}`
      h2.appendChild(titleText)
      headDiv.appendChild(h2)
    })
  };
  exports.headlineMaker = headlineMaker;
})(this);
