
  function ArticleList(){
    this.list = []
  };

  ArticleList.prototype.addArticle = function(article){
    this.list.push(article)
  }
  ArticleList.prototype.getData = function(){
    var articlelist = this
    var response
    var request = new XMLHttpRequest();

    request.onreadystatechange = function(){
      if(this.readystate == 4 && this.status == 200){
        response = JSON.parse(request.response).results
          response.forEach(function(results){
          var headline = new Headline(results.webTitle, results.webPublicationDate, results.webUrl);
          articlelist.addArticle(headline)
        });
      };
    };
    var response = JSON.parse('{"type":"article","webPublicationDate":"2017-12-10T00:05:00Z","webTitle":"Alarm over restraint of NHS mental health patients", "webUrl":"https://www.theguardian.com/society/2017/dec/09/women-black-patients-physically-restrained-mental-health"}')
    var headline = new Headline(response.webTitle, response.webPublicationDate, response.webUrl);
    articlelist.addArticle(headline)
    request.open('GET', 'https://content.guardianapis.com/search?api-key=b7f045b7-75c0-44af-9f61-f7d188b6261d', true);
    request.send()
 };

api = new ArticleList()
api.getData();
console.log(api.list)
