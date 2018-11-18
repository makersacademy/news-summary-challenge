(function(exports) {
  function NewsController() {
    this.articleList = new ArticleList();
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
        appendImage(each['fields']['thumbnail']);
        appendText(each['webTitle']);
      })
    })
  }

  var news_feed = document.getElementById("news_feed")

  function appendText(text) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
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

  exports.NewsController = NewsController;
})(this);
