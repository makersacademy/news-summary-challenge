const apiKey = require('./apiKey');
const apiUrl = `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`
const NewsView = require('./newsView');

class NewsClient {
  loadStoryData(callback) {
    return fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        callback(data.response.results)
      })
      .catch(error => {
      console.log(error);
      // const notesView = new NotesView();
      // notesView.displayError();
      });
  }
}

module.exports = NewsClient;



