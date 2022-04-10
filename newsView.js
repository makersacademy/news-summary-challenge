class NewsView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainDiv = document.querySelector("#main-div");
    this.startEvents();
  }

  startEvents() {
    const searchInput = document.querySelector("#search-input");
    const searchBtn = document.querySelector("#search-btn");
    searchBtn.addEventListener("click", () => {
      document
        .querySelectorAll(".news-div")
        .forEach((article) => article.remove());
      this.api.setCategory(
        searchInput.value,
        (news) => {
          this.model.setNews(news);
          this.displayNews();
        },
        () => {
          this.displayError();
        }
      );
      searchInput.value = "";
    });
  }

  displayNews() {
    this.model.displayNews().forEach((article) => {
      let div = document.createElement("div");
      let title = document.createElement("h2");
      let webUrl = document.createElement("a");
      let section = document.createElement("h3");
      div.className = "news-div";
      webUrl.className = "news-url";
      title.innerText = article.webTitle;
      webUrl.innerText = article.webUrl;
      section.innerText = article.sectionName;
      div.append(title);
      div.append(webUrl);
      div.append(section);
      this.mainDiv.append(div);
    });
  }

  displayError() {
    let error = document.createElement("h4");
    error.innerText = "Sorry, the connection has failed";
    this.mainDiv.append(error);
  }
}

module.exports = NewsView;
