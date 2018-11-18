(function(exports) {
  function NewsController(articleList) {
    this.articleList = articleList;
  }

  const fullArticleApi = "https://content.guardianapis.com/culture/2018/nov/18/tristram-hunt-museums-v-and-a-interview-fake-news-labour?show-blocks=all&api-key=9f99d01f-95dd-48f7-ae13-b120d25884bb"

  NewsController.prototype.displayList = function() {
    fetch(headlinesApi)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
       return json['response']['results'];
    })
    .then(function(result) {
      result.forEach(function(each) {
        var title = each['webTitle'];
        var image = each['fields']['thumbnail'];
        var article = new Article(title, image);
        this.articleList.addArticle(article);
        appendImage(image);
        appendTitle(title, article.getId())
      })
    })
  }

  var news_feed = document.getElementById("news_feed")

  function appendTitle(text, id) {
    var node = document.createElement("LI");
    var link = document.createElement('a')
    var textnode = document.createTextNode(text);
    link.setAttribute("href", "#articles/" + id)
    link.appendChild(textnode);
    node.appendChild(link);
    news_feed.appendChild(node);
  }

  function appendImage(imageLink) {
    var link = document.createElement('a');
    var elem = document.createElement("img");
    link.setAttribute("href", imageLink);
    elem.setAttribute("src", imageLink);
    link.appendChild(elem);
    news_feed.appendChild(link);
  }

  window.addEventListener("hashchange", showArticleForCurrentPage);

  function showArticleForCurrentPage() {
    showArticle(getIdFromUrl(window.location));
  }

  function getIdFromUrl() {
    return location.hash.split("#articles/")[1];
  }

  function showArticle(id) {
    articleList.findById(id)
    document.getElementById("news_feed").innerHTML = articleList.findById(id).getText();
  }

  exports.NewsController = NewsController;
})(this);
