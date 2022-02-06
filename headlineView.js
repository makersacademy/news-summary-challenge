class HeadlineView {
  constructor(model) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.model = model;
  }

  displayStories() {
    let stories = this.model.getStories();
    stories.forEach((story) => {
      const div = document.createElement("div");
      div.className = 'story';
      const h2 = document.createElement("h2");
      h2.className = 'headline';
      h2.innerText = story['headline'];
      div.append(h2);
      this.mainContainerEl.append(div);
    });
  }
}

module.exports = HeadlineView;
