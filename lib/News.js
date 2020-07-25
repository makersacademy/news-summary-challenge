class News{
  constructor(stub = ""){
    this.stub = stub
    this.fetchArticles(this.stub, this.createArticles)
  }

  fetchArticles = function(stub,callback){
    var xhttp = new XMLHttpRequest();
    var articleArray;

    xhttp.onreadystatechange = function(output) {
      if (this.readyState == 4 && this.status == 200) {
        articleArray = callback(this.responseText)
      }
    };

    xhttp.open('GET', stub + 'http://content.guardianapis.com/search?q=show-fields=headline,webUrl&api-key=0958b308-6487-4eb5-86f5-7e1c0cf7c894&order-by=newest', true)
    
    xhttp.send();
  };
  

  createArticles = function(data){
    var newsArray = JSON.parse(data).response.results;
    // var newsArray = responseData.response.results;
    var articleArray = [];
    newsArray.forEach(function(element){
      articleArray.push(new Article(element.id, element.apiUrl, element.webTitle))
    })
    News.prototype.articleList = articleArray
  }
}