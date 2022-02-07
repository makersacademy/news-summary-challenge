class HeadlineView {
  constructor(model, api) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.model = model;
    this.api = api;

    this.searchButtonEl = document.querySelector('#search-button');

    this.searchButtonEl.addEventListener('click', () => {
      this.viewReset();
      const searchTerm = document.querySelector('#search-input').value;
      this.api.loadStories((stories) => {
        this.model.setStories(stories);
        this.displayStories();
      }, `&q=${searchTerm}`);
    });

    this.resetButtonEl = document.querySelector('#reset-button');

    this.resetButtonEl.addEventListener('click', () => {
      this.viewReset();
      this.api.loadStories((stories) => {
        this.model.setStories(stories);
        this.displayStories();
      });
    });
  }

  displayStories() {
    let stories = this.model.getStories();
    stories.forEach((story) => {
      const div = document.createElement("div");
      div.className = 'story';
      const img = document.createElement("img");
      img.className = 'thumbnail'
      img.src = story['thumbnail'];
      div.append(img);
      div.append(document.createElement("br"));
      const a = document.createElement("a");
      a.className = 'headline';
      const link = document.createTextNode(story['headline']);
      a.append(link);
      a.title = story['headline'];
      a.href = story['url'];
      div.append(a);
      div.append(document.createElement("br"));
      this.mainContainerEl.append(div);
    });
  }

  viewReset() {
    this.mainContainerEl.remove();
    this.mainContainerEl = document.createElement("div");
    document.body.append(this.mainContainerEl);
  }
}

module.exports = HeadlineView;
