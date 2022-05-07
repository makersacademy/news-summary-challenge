const App = require('./App');

app = new App();

app.fetchStories((data) => {
  app.saveTitlesUrls(data);
  app.display();
});
