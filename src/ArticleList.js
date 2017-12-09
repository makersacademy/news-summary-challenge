
(function(exports){
  function ArticleList(){
    this.list = []
  };

  ArticleList.prototype.addArticle = function(article){
    this.list.push(article)
  }
  ArticleList.prototype.getData = function(){
    var response
    var request = new XMLHttpRequest();

    request.onreadystatechange = function(){
      if(this.readystate == 4 && this.status == 200){
        response = JSON.parse(this.responseText)
        response.forEach(function(results){
          var headline = new Headline(results.webTitle, results.webPublicationDate, results.webUrl);
          this.addArticle(headline)
        });
      };
    };

    request.open('GET', 'https://content.guardianapis.com/search?api-key=b7f045b7-75c0-44af-9f61-f7d188b6261d', true);
    request.send()
 };
  exports.ArticleList = ArticleList
})(this);
api = new ArticleList()
api.getData();
console.log(api.list)
