(function(exports) {
  const NewsController = function(newspaper, newspaperViewClass) {
    this.newspaperView = new newspaperViewClass(newspaper);
  };

  NewsController.prototype = (function() {

    function displayHtml() {
      let html = (this.newspaperView.html());
      document.getElementById("articles").innerHTML = html;
    }

    return {
      displayHtml
    }
  })();

  exports.NewsController = NewsController;
})(this);