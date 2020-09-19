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

  returnAllNewsAsHtml();
  returnTheNewsTitlesOnly();
})(this);
