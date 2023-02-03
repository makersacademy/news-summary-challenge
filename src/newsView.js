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
          const newStoryEl = document.createElement("div");
          const storyLink = document.createElement("a");

          newStoryEl.className = "story";
          storyImage.src = story.fields.thumbnail;
          storyLink.href = story.webUrl;
          storyLink.target = 'target="_blank"';
          storyLink.textContent = story.webTitle;
          newStoryEl.appendChild(storyImage);
          newStoryEl.appendChild(document.createElement("br"));
          newStoryEl.appendChild(storyLink);

          this.mainContainerEl.appendChild(newStoryEl);

          const lineBreakEl = document.createElement("br");
          this.mainContainerEl.append(lineBreakEl);
        });
      });
  }
}

module.exports = NewsView;
