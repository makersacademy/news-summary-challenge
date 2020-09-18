(function (exports) {
  function getAllNews() {
    let newsPull = new NewsPull();

    newsPull.getNews();
    console.log(newsPull.news[0]);
    confirm.isTrue(newsPull.news.length > 0 === true);
  }
  getAllNews();
})(this);
