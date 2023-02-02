class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
  }

  loadNewsFromApi() {
    const newsStories = this.client.loadNews(
      (news) => {
        this.model.setNews(news);
      },
      () => {
        console.log("Oops, something went wrong");
      }
    );
  }
}

module.exports = NewsView;
