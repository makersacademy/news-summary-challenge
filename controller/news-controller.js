(function(global) {
  function NewsController(todaysNews, printer) {
    this.articles = todaysNews;
    this.printer = printer;
  }

  NewsController.prototype = {
    run: function(content = document.getElementById('content')) {
      content.innerHTML =  this.printer.single(this.articles);
    }
  };

  global.NewsController = NewsController;
})(this);
