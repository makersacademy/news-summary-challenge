(function(global) {
  function NewsController(todaysNews, printer) {
    this.articles = todaysNews.articles();
    this.printer = printer;
  }

  NewsController.prototype = {
    run: function(content = document.getElementById('content')) {
      content.innerHTML = this.printer.list(this.articles);
    }
  };

  global.NewsController = NewsController;
})(this);
