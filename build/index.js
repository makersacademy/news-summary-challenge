import { ArticlesModel } from "./articlesModel";
import { ArticlesView } from "./articlesView";
import { NewYorkTimesApi } from "./newYorkTimesApi";
import { ArticlesController } from "./articlesController";
const api = new NewYorkTimesApi();
const view = new ArticlesView();
const model = new ArticlesModel();
const controller = new ArticlesController(model, view, api);
controller.loadArticles();
