class App {
  constructor() {
    this.currentHeadlines = []
  }


  fetchStories(cb) {
    fetch('https://content.guardianapis.com/search?api-key=9f9c20e8-7f5a-4de8-9bd3-efe35ccbcbca')
      .then(response => response.json())
      .then(data => {
        cb(data)
      });
  }

  saveTitleUrl(data) {
    data['results'].forEach((result) => {
      this.currentHeadlines.push({
        "webTitle": result.webTitle,
        "webUrl": result.webUrl
      });
    });
    console.log(this.currentHeadlines)
  };
}

module.exports = App;

app = new App();

