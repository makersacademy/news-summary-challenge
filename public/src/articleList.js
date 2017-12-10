(function(exports){

  function ArticleList(){
    this.list = []
  };

  ArticleList.prototype.addArticle = function(article){
    this.list.push(article)
  }

  ArticleList.prototype.getData = function(){
    var request
    var dieu = this
    var getback
    request = new XMLHttpRequest();
    request.open('GET', 'https://content.guardianapis.com/search?api-key=b7f045b7-75c0-44af-9f61-f7d188b6261d', true);
    request.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        getback = JSON.parse(this.response).response.results
        console.log(getback[0].id)
        getback.forEach(function(result){
          dieu.addArticle(new Headline(result.webTitle, result.webPublicationDate, result.webUrl));
        });
      };
    };
    request.send()
  };


  ArticleList.prototype.innerHtmlData = function () {
    this.list.forEach(function(article) {
      console.log(article)
      document.getElementById("guardianInfo").innerHTML += "<a href=" + "'" + article.url + "'" +  ">" + article.title + '</a> <br>'

    })

  };

  exports.ArticleList = ArticleList
})(this);

var articlelist = new ArticleList();
articlelist.getData();
articlelist.innerHtmlData();
articlelist.innerHtmlData();
