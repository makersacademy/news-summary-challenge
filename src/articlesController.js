class ArticlesController {
  constructor(model, view, api) {
    this.model = model;
    this.view = view;
    this.api = api;

    this.#addSearchEventHandler();
    this.#addResetEventHandler();
  }

  loadArticles = async () => {
    try {
      const data = await this.api.getArticles();
      this.model.setArticles(data);
      const articles = this.model.getArticles();
      this.view.displayArticles(articles);
    } catch (error) {
      console.log(error);
    }
  };

  #addSearchEventHandler = () => {
    this.view.addSearchEventHandler(this.#loadSearchArticles);
  };

  #loadSearchArticles = async (searchInput) => {
    try {
      const data = await this.api.getArticles();
      this.model.setArticles(data);
      const articles = this.model.getSearchArticles(searchInput);
      this.view.displayArticles(articles);
    } catch (error) {
      console.log(error);
    }
  };

  #addResetEventHandler = () => {
    this.view.addResetEventHandler(this.loadArticles);
  };
}

module.exports = ArticlesController;
