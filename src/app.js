(function app() {
  const controller = new NewsAppController();

  function outputHTML() {
    controller.collection.articles.forEach((article) => {
      const html = ArticleGenerator.generate(article);
      document.getElementById('articles').innerHTML += html;
    });
  }

  controller.mockApiResponse(outputHTML);
}());
