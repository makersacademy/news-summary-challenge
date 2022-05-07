const axios = require("axios").default;
class NewsSummaryApis {
  loadHeadlines(callback) {
    let today = new Date();
    let fullYear = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate() - 1;
    fetch(`http://content.guardianapis.com/search?section=politics&from-date=${fullYear}-${month}-${day}&show-fields=thumbnail&api-key=${process.env.GUARDIAN_KEY}`)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch(error => console.error(error));
  }

  getSummary(id, callback) {
    const options = {
      method: 'POST',
      url: 'https://tldrthis.p.rapidapi.com/v1/model/extractive/summarize-url/',
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-host': 'tldrthis.p.rapidapi.com',
        'x-rapidapi-key': process.env.TLDR_KEY,
      },
      data: {
        url: 'https://www.theguardian.com/' + id,
        num_sentences: 5,
        is_detailed: false
      }
    };

    axios.request(options).then((response) => {
      callback(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
}

module.exports = NewsSummaryApis;