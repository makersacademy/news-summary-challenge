class ArticlesView {
  constructor(api) {
    this.api = api;
  }

  loadArticles = () => {
    this.api.getArticles(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };
}

module.exports = ArticlesView;
