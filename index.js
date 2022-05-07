class App {

  fetchStories(cb) {
    fetch('https://content.guardianapis.com/search?api-key=9f9c20e8-7f5a-4de8-9bd3-efe35ccbcbca')
      .then(response => response.json())
      .then(data => {
        cb(data)
      });
  }
}

module.exports = App;