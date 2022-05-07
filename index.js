const App = require('./App');

app = new App();

app.fetchStories((data) => {
  app.saveStories(data);
  app.displayStories();
});
