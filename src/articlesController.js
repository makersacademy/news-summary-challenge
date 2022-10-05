class ArticlesController {
  constructor(model, view, api) {
    this.model = model;
    this.view = view;
    this.api = api;
  }

  loadArticles = () => {
    this.api.getArticles(
      (data) => {
        const articles = this.model.setArticles(data);
        this.view.displayArticles(articles);
      },
      (error) => {
        console.log(error);
      }
    );
  };
}

module.exports = ArticlesController;
