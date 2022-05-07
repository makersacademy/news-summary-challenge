class App {
  constructor() {
    this.currentHeadlines = [];
  }


  fetchStories(cb) {
    fetch('https://content.guardianapis.com/search?api-key=9f9c20e8-7f5a-4de8-9bd3-efe35ccbcbca')
      .then(response => response.json())
      .then(data => {
        cb(data)
      });
  }

  saveTitlesUrls(data) {
    data['results'].forEach((result) => {
      this.currentHeadlines.push({
        "webTitle": result.webTitle,
        "webUrl": result.webUrl
      });
    });
    console.log(this.currentHeadlines)
  };

  display() {
    console.log(this.currentHeadlines)
    this.currentHeadlines.forEach((headline) => {
      let headlineEl = document.createElement('a');
      headlineEl.classList.add('headline');
      headlineEl.text = `${headline.webTitle}`;
      headlineEl.href = headline.webUrl;
      document.querySelector('#main-container').append(headlineEl);
    })
  };
}

module.exports = App;

app = new App();

app.fetchStories((data) => {
  app.saveTitlesUrls(data);
  app.display();
});
