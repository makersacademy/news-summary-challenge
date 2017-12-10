(function(exports) {
  function Article() {
    this.headline = "";
    this.body = "";
  };

  exports.Article = Article;
})(this);








var articleObject = new XMLHttpRequest();
articleObject.open('GET', 'http://content.guardianapis.com/search?api-key=' + apiKey(), true);

articleObject.onload = function() {
  if (articleObject.status >= 200 && articleObject.status < 400) {
    var articleData = JSON.parse(articleObject.responseText);
    console.log(articleData.response.results[0]);
    document.querySelector('body').innerHTML = articleData.response.results[0].webUrl;
  }
}

articleObject.send();
