(function (exports) {
  function getAllNews() {
    let newsPull = new NewsPull();
    newsPull.getNews();

    confirm.isTrue(newsPull.news.length > 0 === true);
  }
  getAllNews();
})(this);
