(function(global) {
  function ArticlePrinter() {
  }

  ArticlePrinter.prototype = {
    list: function(articles) {
    },
    single: function(solo) {
      return `<li><div>${solo.articles()}</li></div>`;
    }
  };

  global.ArticlePrinter = ArticlePrinter;
})(this);
