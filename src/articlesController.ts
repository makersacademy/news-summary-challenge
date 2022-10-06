import { ArticlesModel } from "./articlesModel";
import { ArticlesView } from "./articlesView";
import { NewYorkTimesApi } from "./newYorkTimesApi";

export class ArticlesController {
  api: NewYorkTimesApi;
  view: ArticlesView;
  model: ArticlesModel;

  constructor(model: ArticlesModel, view: ArticlesView, api: NewYorkTimesApi) {
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

  #loadSearchArticles = async (searchInput: string) => {
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
