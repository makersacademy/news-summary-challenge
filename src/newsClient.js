const apiKey = require("../apiKey");

class NewsClient {
  fetchTodaysNews(callback, errorCallback) {
    const formattedDate = this.formatTodaysDate();

    const url = `https://content.guardianapis.com/search?api-key=${apiKey}&show-fields=headline,thumbnail&from-date=${formattedDate}&page-size=20`;

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

  formatTodaysDate() {
    // Need date in 2014-02-16 format for API
    const today = new Date();
    const formattedMonth = `${today.getMonth()}`.padStart(2, "0");
    const formattedDay = `${today.getDate()}`.padStart(2, "0");

    return `${today.getFullYear()}-${formattedMonth}-${formattedDay}`;
  }
}

module.exports = NewsClient;
