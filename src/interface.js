fetchArticles = function(stub,callback,callback2){
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function(output) {
    if (this.readyState == 4 && this.status == 200) {
      callback(this.responseText,callback2)
    }
  };

  xhttp.open('GET', stub + 'http://content.guardianapis.com/search?q=show-fields=headline,webUrl&api-key=0958b308-6487-4eb5-86f5-7e1c0cf7c894&order-by=newest', true)
  
  xhttp.send();
};


createArticles = function(data, callback){
  var newsArray = JSON.parse(data).response.results;
  var articleArray =[];
  newsArray.forEach(function(element){
    articleArray.push(new Article(element.id, element.apiUrl, element.webTitle))
  })
  callback(articleArray)
}

printArticle = function(articles){
  articles.forEach(printHTML)
}

printHTML = function(article){
  document.getElementById("headline").innerHTML += `<a href=http://www.theguardian.com/${article.urlID}>`+ article.title + "</a>" + "<br>"
}