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

  fetchArticlesWithQuery(query, callback, errorCallback = (error) => console.error(error)) {
    const apiUrl = 'https://content.guardianapis.com/search';
    const paramsString = this.#createParamsString({ 
      'searchTerm': query
    });

    fetch(apiUrl + '?' + paramsString)
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => errorCallback(error));
  }

  #createParamsString(params) {
    const searchParams = new URLSearchParams();
    if (params.hasOwnProperty('searchTerm')) {
      searchParams.append('q', params['searchTerm']);
    }
    searchParams.append('query-fields', 'headline');
    searchParams.append('show-fields', 'thumbnail,headline,byline');
    searchParams.append('order-by', 'newest');
    if (params.hasOwnProperty('date') && params['date'] !== '') {
      searchParams.append('from-date', params['date']);
      searchParams.append('to-date', params['date']);
    }
    searchParams.append('api-key', apiKeys.GUARDIAN_API_KEY);

    return searchParams.toString();
  }
}

module.exports = ArticleClient;
