const NewsModel = require("./newsModel");
const NewsClient = require("./newsClient");

class NewsView {
  constructor(newsModel, newsClient) {
    this.newsModel = newsModel;
    this.newsClient = newsClient;

    this.mainContainerEl = document.querySelector("#main-container");
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
      const newsEl = document.createElement("div");
      newsEl.className = "news";

      const newsImg = document.createElement("img");
      newsImg.src = singleNews.fields.thumbnail;

      const newsTitle = document.createElement("h2");
      newsTitle.textContent = singleNews.webTitle;

      const newsSection = document.createElement("h3");
      newsSection.textContent = singleNews.sectionName;

      newsEl.append(newsImg, newsTitle, newsSection);
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

// display() {
//   const data = this.model.getRepoInfo();

//   const repoName = document.querySelector('#repo-name');
//   repoName.textContent = data.full_name;
//   const repoDescription = document.querySelector('#repo-description');
//   repoDescription.textContent = data.description;
//   const repoImg = document.querySelector('#repo-image');
//   repoImg.src = data.organization.avatar_url;
// }
