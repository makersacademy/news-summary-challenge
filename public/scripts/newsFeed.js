class NewsFeed {
  constructor() {
        this.newsStories = newsStories;
    };

  getHeadlines() {
    let headlines = []
    this.newsStories.forEach(function(story) {
      headlines.push(story["webTitle"])
    })
    return headlines;
  };

}
