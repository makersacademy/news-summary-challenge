(function (exports) {
  async function returnAllNewsAsArray() {
    let newsPull = new NewsPull();
    await newsPull.fetchNews();
    confirm.isTrue(Array.isArray(newsPull.articles) === true);
    confirm.isTrue(newsPull.articles.length > 0 === true);
  }
  returnAllNewsAsArray();
})(this);
