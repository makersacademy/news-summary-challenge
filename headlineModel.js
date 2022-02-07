class HeadlineModel {
  constructor() {
    this.stories = [];
  }

  getStories() {
    return this.stories;
  }

  setStories(data) {
    this.stories = [];
    const results = data['response']['results'];
    results.forEach((story) => {
      this.stories.push({
        "thumbnail":story['fields']['thumbnail'],
        "headline":story['fields']['headline'],
        "url":story['webUrl']
      });
    });
  }
}

module.exports = HeadlineModel;
