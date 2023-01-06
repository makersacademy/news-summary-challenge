class NewsClient {
  loadHeadlines(callback) {
    const apiKey = process.env.GUARDIAN_KEY;
    const apiUrl = `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => {
        callback(responseData);
      });
  }
}

module.exports = NewsClient;
