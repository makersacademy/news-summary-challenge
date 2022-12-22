class ArticlesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.articlesFromModel = this.model.getArticles();
    this.newsFeed = document.querySelector("#news-feed");
    this.clearFeedBtn = document.querySelector("#clear-feed-button");
    this.refreshBtn = document.querySelector("#refresh-button");
    this.searchInput = document.querySelector("#search-input");
    this.allHeadlines = [document.querySelectorAll("h1")];
    this.clearFeedBtn.addEventListener("click", () => {
      this.clearFeed();
    });
    this.searchInput.addEventListener("input", (e) => {
      const searchInput = e.target.value.toLowerCase();
      const filteredArticles = this.articlesFromModel.filter((article) => {
        return article.webTitle.toLowerCase().includes(searchInput);
      });
      this.clearFeed();
      this.displayArticles(filteredArticles);
    });
  }

  displayArticlesFromApi() {
    this.api.loadArticles(
      (repoData) => {
        this.model.addArticle(repoData.response.results);
        this.displayArticles(this.articlesFromModel);
      },
      () => {
        this.displayError();
      }
    );
  }

  displayArticles(articles) {
    articles.forEach((article) => {
      this.addImage(article);
      this.addHeadline(article);
    });
  }

  addHeadline(article) {
    const h1 = document.createElement("h1");
    h1.className = "news-title";
    h1.innerText = article.webTitle;
    h1.onclick = () => {
      window.location.href = article.webUrl;
    };
    this.newsFeed.append(h1);
  }

  addImage(article) {
    const img = document.createElement("img");
    img.className = "news-image";
    img.setAttribute("id", article.id);
    img.src = article.fields.thumbnail;
    img.onclick = () => {
      window.location.href = article.webUrl;
    };
    this.newsFeed.append(img);
  }

  displayError() {
    let errorMessage = document.createElement("div");
    errorMessage.className = "error";
    errorMessage.textContent = "Oops, something went wrong!";
    this.newFeed.append(errorMessage);
  }

  clearFeed() {
    const images = document.querySelectorAll("img.news-image");
    images.forEach((element) => {
      element.remove();
    });
    const headlines = document.querySelectorAll("h1.news-title");
    headlines.forEach((element) => {
      element.remove();
    });
  }
}

module.exports = ArticlesView;
