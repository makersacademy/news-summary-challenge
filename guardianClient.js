const apiKey = require('./apiKey');

class GuardianClient {
  constructor() {
  }

  fetchGuardianData() {
    const apiUrl = `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`;
    return fetch(apiUrl)
    .then((response) => response.json());
  }
}

module.exports = GuardianClient;