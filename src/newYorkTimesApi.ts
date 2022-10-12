import { apiKey } from "./apiKey";

export class NewYorkTimesApi {
  url: string;
  apiKey: string;

  constructor() {
    this.url = "https://api.nytimes.com/svc/topstories/v2/";
    this.apiKey = `?api-key=${apiKey}`;
  }

  getArticles = async (): Promise<Article[]> => {
    const articles = await this.getArticlesHome();
    return articles;
  };

  getArticlesHome = async (): Promise<Article[]> => {
    const path = "home.json";
    const url = this.url + path + this.apiKey;
    const articles = await fetch(url).then((res) => res.json());
    return articles.results;
  };
}
