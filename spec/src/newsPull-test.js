(function (exports) {
  function returnAllNewsAsHtml() {
    let newsPull = new NewsPull();
    let expected = newsPull.getHtmlNews();
    confirm.isTrue(expected.length > 0 === true);
  }

  function returnTheNewsTitlesOnly() {
    let newsPull = new NewsPull();
    newsPull.getTitles();
    confirm.isTrue(Array.isArray(newsPull.titles) === true);
    confirm.isTrue(newsPull.titles.length > 0 === true);
  }

  function returnTheFullArticleList() {
    let newsPull = new NewsPull();
    newsPull.getArticles();
    confirm.isTrue(Array.isArray(newsPull.articles) === true);
    confirm.isTrue(newsPull.articles.length > 0 === true);
  }

  returnAllNewsAsHtml();
  returnTheNewsTitlesOnly();
  returnTheFullArticleList();
})(this);
