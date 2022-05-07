const App = require('./App');

app = new App();

console.log('button: ', document.querySelector('button#search-button'));

app.fetchStories((data) => {
  app.saveStories(data);
  app.displayStories();
});
