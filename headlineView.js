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
      this.mainContainerEl.append(div);
    });
  }
}

module.exports = HeadlineView;
