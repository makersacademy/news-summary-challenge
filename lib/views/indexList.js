(function (exports) {
  function ListIndex() {
    function render(data) {
      var articles = data.articles;
      var items = articles.map((article, index) => {
        article.index = index;
        return ArticleList().render(article);
      })
      return `
        <div class="container">
          <ul id="listNotes" class="list-group list-group-flush">
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
