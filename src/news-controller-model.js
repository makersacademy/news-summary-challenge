(function(exports) {
  const NewsController = function(newspaper, newspaperViewClass) {
    this.newspaper = newspaper || new Newspaper();
    this.newspaperViewClass = newspaperViewClass || NewspaperView;
    this.newspaperView = new this.newspaperViewClass(this.newspaper);
  };

  NewsController.prototype = (function() {

    function displayHtml() {
      let html = (this.newspaperView.html());
      document.getElementById("articles").innerHTML = html;
    }
    function loadLatestNews() {
      this.newspaper.fetchArticles();
    }

    return {
      displayHtml, loadLatestNews
    }
  })();

  exports.NewsController = NewsController;
})(this);