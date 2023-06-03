const apiKey = require('./apiKey')

class NewsClient {
  fetchNewsStories(callback, query = "") {
    const url = `https://content.guardianapis.com/search?q=${query}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`
    return fetch(url)
        .then(response => response.json())
        .then((data) => {
          const storiesArray = [];
          const rawDataArray = data.response.results;

          rawDataArray.forEach((storyData) => {
            const newStory = {
              webUrl: storyData.webUrl,
              headline: storyData.fields.headline,
              byline: storyData.fields.byline,
              thumbnailUrl: storyData.fields.thumbnail,
            }
            storiesArray.push(newStory);
          })

          return storiesArray;
        })
        .then(storiesArray => callback(storiesArray));
  }
}

module.exports = NewsClient;
