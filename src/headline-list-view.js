(function (exports) {

  // newsController injection as views should not have site of models
  function HeadlineListView(newsController) {
    this.newsController = newsController;
    this.newsHeadline = document.getElementById('news');
    this.newsHeadline.innerHTML = newsController.returnHeadlineHTML();
    //this.newsHeadline.addEventListener('click', newsController);
  }

  exports.HeadlineListView = HeadlineListView;

})(this);