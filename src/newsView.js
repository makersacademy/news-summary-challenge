const NewsModel = require("./newsModel");
const NewsClient = require("./newsClient");

class NewsView {
  constructor(newsModel, newsClient) {
    this.newsModel = newsModel;
    this.newsClient = newsClient;

    this.mainContainerEl = document.querySelector("#main-container");

    this.refreshButton = document.querySelector("#refresh-button");

    this.refreshButton.addEventListener("click", () => {
      this.displayNewsFromApi();
    });
  }

  displayNewsFromApi() {
    return this.newsClient.fetchNews(
      (news) => {
        this.newsModel.set(news);
        this.displayNews();
      },
      (error) => this.displayError(error)
    );
  }

  displayNews() {
    document.querySelectorAll(".news").forEach((element) => {
      element.remove();
    });

    const news = this.newsModel.get();

    news.forEach((singleNews) => {
      const newsEl = document.createElement("a");
      newsEl.className = "news";
      newsEl.href = singleNews.webUrl;

      const newsDiv = document.createElement("div");

      const newsImg = document.createElement("img");
      newsImg.src = singleNews.fields.thumbnail;

      const newsTitle = document.createElement("h2");
      newsTitle.textContent = singleNews.webTitle;

      const newsSection = document.createElement("h3");
      newsSection.textContent = singleNews.sectionName;

      newsDiv.append(newsImg, newsTitle, newsSection);
      newsEl.append(newsDiv);
      this.mainContainerEl.append(newsEl);
    });
  }

  displayError(error) {
    const errorEl = document.createElement("div");
    errorEl.id = "error-message";
    errorEl.textContent = `Something went wrong: ${error}`;
    this.mainContainerEl.append(errorEl);
  }
}

module.exports = NewsView;
