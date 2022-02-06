class HeadlineModel {
  constructor() {
    this.stories = [];
  }

  getStories() {
    return this.stories;
  }

  addStory(story) {
    this.stories.push(story);
  }

  setStories(data) {
    const results = data['response']['results'];
    results.forEach((story) => {
      this.stories.push({ "headline":story['fields']['headline'] });
    });
  }
}

module.exports = HeadlineModel;
