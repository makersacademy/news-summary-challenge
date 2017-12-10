
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
        getback.forEach(function(result){
          dieu.addArticle(new Headline(result.webTitle, result.webPublicationDate, result.webUrl));
        });
      };
    };
  request.send()
 };
