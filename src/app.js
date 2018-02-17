(function app() {
  const controller = new NewsAppController();

  controller.getArticles();

  controller.processData();

  controller.collection.articles.forEach((article) => {
    outputHTML(article);
  });

  function outputHTML(article) {
    const html = ArticleGenerator.generate(article);
    document.getElementById('articles').innerHTML += html;
  }
}());
