(function(exports) {
  const NewsController = function(newspaper, newspaperViewClass) {
    this.newspaperView = new newspaperViewClass(newspaper);
  };

  NewsController.prototype = (function() {

    function displayHeadlines() {
      let html = (this.newspaperView.viewHeadlines());
      document.getElementById("headlines").innerHTML = html;
    }

    return {
      displayHeadlines
    }
  })();

  exports.NewsController = NewsController;
})(this);