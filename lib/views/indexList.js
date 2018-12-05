(function (exports) {
  function ListIndex() {
    function render(articles) {
      var items = articles.forEach(function(article) {
        ArticleList().render(article)
      });
      return `
        <div class="container">
          <ul id="articleList" class="list-group list-group-flush">
            ${items}
          </ul>
        </div>
      `
    }
    return {
      render: render
    }
  }
  exports.ListIndex = ListIndex;
})(this);
