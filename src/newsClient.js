const apiKey = require("../apiKey");

class NewsClient {
  fetchAllHeadlines(callback, errorCallback) {
    const url = `https://content.guardianapis.com/search?api-key=${apiKey}&show-fields=headline,thumbnail`;

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data.response.results.map(item => {
          return {
            headline: item.fields.headline,
            thumbnail: item.fields.thumbnail,
            url: item.webUrl,
          };
        });
      })
      .then(formattedData => callback(formattedData))
      .catch(error => {
        console.log("Error: ", error);
        errorCallback();
      });
  }
}

module.exports = NewsClient;
