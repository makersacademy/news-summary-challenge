const url = 'https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=test';

class NewsApi {
    retrieveNewsData(callback) {
        fetch(url)
        .then(response => response.json())
        .then(data => callback(data))
    };
}

module.exports = NewsApi;