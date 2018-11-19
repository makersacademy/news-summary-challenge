(function (exports) {
  function ArticleList() {
    function render(article) {
      console.log(article)
      return `
        <li class="list-group-item border">
          <h3>${article.title}</h3>
          <p>${article.description}</p>
          <img src="${article.urlToImage}" alt="Broken IMG">
          <a href="${article.url}">${article.url}</a>
        </li>
      `
    }
    return {
      render: render
    }
    exports.ArticleList = ArticleList;
  }
})(this);
