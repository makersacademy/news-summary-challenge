const NewsModel = require("./newsModel");
const NewsClient = require("./newsClient");

class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");

    window.onload = () => {
      this.searchInput = document.querySelector("#search-input");
      this.searchButton = document.querySelector("#search-button");

      this.searchButton.addEventListener("click", () => {
        this.model.searchedNews = [];
        const searchCriteria = this.searchInput.value;
        this.displaySearchedStories(this.model.getSearchedNews(searchCriteria));
      });
    };
  }

  loadNewsFromApi() {
    return new Promise((resolve, reject) => {
      this.client.loadNews(
        (news) => {
          this.model.setNews(news);
          resolve();
        },
        () => {
          console.log("Oops, something went wrong");
          reject();
        }
      );
    });
  }

  displayNewsStories() {
    this.loadNewsFromApi()
      .then(() => {
        return this.model.getNews();
      })
      .then((allStories) => {
        allStories.forEach((story) => {
          const storyImage = document.createElement("img");
          const newStoryEl = document.createElement("div");
          const storyLink = document.createElement("a");

          newStoryEl.className = "story";
          storyImage.src = story.fields.thumbnail;
          storyLink.href = story.webUrl;
          // next two lines handle opening link in new tab. Second line is a security thing
          storyLink.target = 'target="_blank"';
          storyLink.rel = "noopener noreferrer";

          storyLink.textContent = story.webTitle;
          newStoryEl.appendChild(storyImage);
          newStoryEl.appendChild(storyLink);

          this.mainContainerEl.appendChild(newStoryEl);

          const lineBreakEl = document.createElement("br");
          this.mainContainerEl.append(lineBreakEl);
        });
      });
  }

  displaySearchedStories(searchedNews) {
    this.mainContainerEl.innerHTML = "";
    searchedNews.forEach((story) => {
      const storyImage = document.createElement("img");
      const newStoryEl = document.createElement("div");
      const storyLink = document.createElement("a");

      newStoryEl.className = "story";
      storyImage.src = story.fields.thumbnail;
      storyLink.href = story.webUrl;

      storyLink.target = 'target="_blank"';
      storyLink.rel = "noopener noreferrer";

      storyLink.textContent = story.webTitle;
      newStoryEl.appendChild(storyImage);
      newStoryEl.appendChild(storyLink);

      this.mainContainerEl.appendChild(newStoryEl);

      const lineBreakEl = document.createElement("br");
      this.mainContainerEl.append(lineBreakEl);
    });
  }
}

module.exports = NewsView;
