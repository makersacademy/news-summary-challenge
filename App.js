class App {
  constructor() {
    this.stories = [];
  }


  fetchStories(cb) {
    fetch('https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=9f9c20e8-7f5a-4de8-9bd3-efe35ccbcbca')
      .then(response => response.json())
      .then(data => {
        console.log("Success: ", data);
        cb(data)
      });
  }

  saveStories(data) {
    data.response.results.forEach((result) => {
      this.stories.push({
        "webTitle": result.webTitle,
        "webUrl": result.webUrl,
        "thumbnail": result.fields.thumbnail
      });
    });
    console.log(this.stories)
  };

  displayStories() {
    console.log(this.stories)
    this.stories.forEach((headline) => {
      let headlineImageEl = document.createElement('img');
     headlineImageEl.classList.add('headline');
     headlineImageEl.src = headline.thumbnail;
      document.querySelector('#main-container').append(headlineImageEl);
      let headlineEl = document.createElement('a');
      headlineEl.classList.add('headline');
      headlineEl.text = `${headline.webTitle}`;
      headlineEl.href = headline.webUrl;
      document.querySelector('#main-container').append(headlineEl);
    })
  };
}

module.exports = App;