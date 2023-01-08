const apiKeys = require('./apiKeys');

class ArticleClient {
  fetchArticles(date, callback, errorCallback = (error) => console.error(error)) {
    const apiUrl = 'https://content.guardianapis.com/search';
    const paramsString = this.#createParamsString({ 
      'date': date,
      'searchTerm': ''
    });

    fetch(apiUrl + '?' + paramsString)
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => errorCallback(error));
  }

  #createParamsString(object) {
    const searchParams = new URLSearchParams();
    searchParams.append('q', object['searchTerm']);
    searchParams.append('query-fields', 'headline');
    searchParams.append('show-fields', 'thumbnail,headline,byline');
    searchParams.append('order-by', 'newest');
    searchParams.append('from-date', object['date']);
    searchParams.append('to-date', object['date']);
    searchParams.append('api-key', apiKeys.GUARDIAN_API_KEY);

    return searchParams.toString();
  }
}

module.exports = ArticleClient;
