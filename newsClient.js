class NewsClient {
  loadHeadlines(callback) {
    // const apiKey = process.env.GUARDIAN_KEY;
    const apiUrl =
      "https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=d894a708-39c5-403d-a0f6-8790495e4851";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => {
        callback(responseData);
      });
  }
}

module.exports = NewsClient;
