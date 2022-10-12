class ArticlesModel {
  articles: Article[];

  constructor() {
    this.articles = [];
  }

  setArticles = (data: Article[]): void => {
    this.articles = data;
  };

  getArticles = (): Article[] => {
    return this.articles;
  };

  getSearchArticles = (searchInput: string): Article[] => {
    if (searchInput == null) searchInput = "";
    const filteredArticles = this.articles.filter((article) => {
      const titleAndAbstract = article.title + " " + article.abstract;
      return titleAndAbstract
        .toLowerCase()
        .includes(searchInput!.toLowerCase());
    });
    return filteredArticles;
  };
}

export { ArticlesModel };
