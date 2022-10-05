class ArticlesController {
  constructor(model, view, api) {
    this.model = model;
    this.view = view;
    this.api = api;
  }

  loadArticles = async () => {
    try {
      const data = await this.api.getArticles();
      const articles = this.model.setArticles(data);
      this.view.displayArticles(articles);
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = ArticlesController;
