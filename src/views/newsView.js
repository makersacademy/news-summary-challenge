class newsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    this.newsContainer = document.querySelector("#newsContainer");
  }

  displayNews() {
    this.model.getNews().forEach((article) => {
      const articleContainer = document.createElement("div");
      articleContainer.classList.add("article");
      articleContainer.dataset.articleId = article.id;

      const thumbnail = document.createElement("img");
      thumbnail.src = article.fields.thumbnail;
      articleContainer.appendChild(thumbnail);

      const headline = document.createElement("h2");
      headline.innerText = article.fields.headline;
      articleContainer.appendChild(headline);

      this.newsContainer.appendChild(articleContainer);
    });
  }

  displayNewsFromApi() {
    const callback = (data) => {
      this.model.setNews(data);
      this.displayNews();
    };
    this.client.fetchNews(callback);
  }
}

module.exports = newsView;
