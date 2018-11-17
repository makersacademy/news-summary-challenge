(function(exports) {
  function NewsController() {

  }

  NewsController.prototype.render = function() {
    fetch("https://content.guardianapis.com/search?api-key=aabcd544-37ed-434f-a275-e2af9055b42b")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data)
      var articleList = new ArticleList();
      articleList.add(data);
      var articleListView = new ArticleListView(articleList);
      var element = document.querySelector('ul')
      element.innerHTML = articleListView.getHTML();
    })
  }

  exports.NewsController = NewsController
})(this);

var newsController = new NewsController();
newsController.render()
