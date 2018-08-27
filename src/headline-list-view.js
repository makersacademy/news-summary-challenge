(function (exports) {

  function HeadlineListView(newsController) {
    this.newsController = newsController;
  };

  HeadlineListView.prototype.returnHeadlineHTML = function() {
    for (var i = 0; i < this.newsController.headlineList.headlineListArray.length; i++) {
      var headline = this.newsController.headlineList.headlineListArray[i].headline.webTitle;
      var storyLink = this.newsController.headlineList.headlineListArray[i].headline.webUrl;
      var image = this.newsController.headlineList.headlineListArray[i].headline.fields.thumbnaill;
      var html = `<ul><li><div><a href='#${storyLink}'>${headline}<div><img src='${image}'></div></a></div></li><br></ul>`;
    }
    return html;
  };

  exports.HeadlineListView = HeadlineListView;

})(this);