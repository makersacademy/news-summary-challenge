class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");
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
        return this.model.getAllNews();
      })
      .then((allStories) => {
        allStories.forEach((story) => {
          const storyImage = document.createElement("img");
          storyImage.src = story.fields.thumbnail;
          this.mainContainerEl.append(storyImage);

          const newStoryEl = document.createElement("div");
          newStoryEl.className = "story";
          newStoryEl.textContent = story.webTitle;
          this.mainContainerEl.append(newStoryEl);

          const lineBreakEl = document.createElement("br");
          this.mainContainerEl.append(lineBreakEl);
        });
      });
  }
}

module.exports = NewsView;
