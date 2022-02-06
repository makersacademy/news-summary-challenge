class HeadlineModel {
  constructor() {
    this.stories = [];
  }

  getStories() {
    return this.stories;
  }

  setStories(data) {
    const results = data['response']['results'];
    results.forEach((story) => {
      this.stories.push({
        "thumbnail":story['fields']['thumbnail'],
        "headline":story['fields']['headline']
      });
    });
  }
}

module.exports = HeadlineModel;
