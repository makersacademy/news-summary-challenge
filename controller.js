var headlines = document.getElementById("headlines");
articles = []

  var request = new XMLHttpRequest();
  request.open("GET","http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search", true);
  request.onload = function(){

    var data = JSON.parse(this.response);
    data["response"]["results"].forEach(function(item) {
      var article = new NewsArticle(item["webTitle"], item["webUrl"])
      articles.push(article);
      var li = document.createElement("li");
      li.innerHTML = "<a href='" + article.url + "'>" + article.headline + "</a>";
      //li.setAttribute("id", note.id);
      headlines.appendChild(li);
    });
    ;
  };
  request.send();
