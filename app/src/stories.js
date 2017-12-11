(function(exports) {
  function Stories() {
    this.articles = [];
  };

  exports.Stories = Stories;
})(this);

Stories.prototype.addArticles = function(array) {
  for (i = 0; i < array.length; i++) {
    this.articles.push(array[i])
  }
};


// var articleObject = new XMLHttpRequest();
// articleObject.open('GET', 'http://content.guardianapis.com/search?api-key=' + apiKey(), true);
