class NewsView {
  constructor(newsModel, newsApi) {
    this.newsModel = newsModel;
    this.newsApi = newsApi;
    this.mainContainer = document.querySelector("#main-container");

    this.newsApi.loadStory(data => {
      this.newsModel.addStory(data.response.results);
      this.createStory();
    });

    const submitButtonEl = document.querySelector('#submit');
    const searchQuery = document.querySelector('#search-box');

    submitButtonEl.addEventListener('click', () => {
      const searchName = searchQuery.value;
      document.querySelectorAll(".story-container").forEach(story => story.remove());

      this.newsApi.searchStory(searchName, (data) => {
        this.newsModel.addStory(data.response.results);
        this.createStory();
      });
    });
  };

  createStory() {
    this.newsModel.showStory().forEach(story => {

      this.#addStoryEl();
      this.#addHeadline(story.webTitle, story.webUrl);
    });
  };


  #addStoryEl() {
    let storyEl = document.createElement("story");
    storyEl.className = "story-container";
    this.mainContainer.append(storyEl);
  };

  #addHeadline(headline, source) {
    let titleEl = document.createElement("h3");
    titleEl.innerText = headline;
    titleEl.className = "story-title";

    let sourceEl = document.createElement("a");
    sourceEl.href = source;
    sourceEl.append(titleEl)
    this.mainContainer.lastElementChild.append(sourceEl);
  };
};

module.exports = NewsView;