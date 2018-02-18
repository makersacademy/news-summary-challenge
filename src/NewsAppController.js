class NewsAppController {
  recordData(apiResponse) {
    this.articleData = apiResponse;
  }

  processData() {
    const collection = new ArticleCollection();
    this.articleData.response.results.forEach((result) => {
      const headline = result.webTitle;
      const url = result.webUrl;
      // const summary = result.summary;
      const summary = 'summary here';
      const article = new Article(headline, url, summary);
      collection.add(article);
    });
    this.collection = collection;
  }

  getArticles(callback) {
    const self = this;
    const makersApiURL = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=';
    const apiURL = 'http://content.guardianapis.com/uk-news';
    const request = new XMLHttpRequest();
    request.open('GET', makersApiURL + apiURL);
    request.responseType = 'json';
    request.send();
    request.onload = function load() {
      self.recordData(request.response);
      self.getSummaries();
      self.processData();
      callback();
    };
  }

  getSummaries() {
    const makersApiURL = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=';
    const apiURL = 'https://api.aylien.com/api/v1/summarize?url=';
    this.articleData.response.results.forEach((result) => {
      const request = new XMLHttpRequest();
      request.open('GET', makersApiURL + apiURL + result.webUrl);
      request.responseType = 'json';
      request.send();
      request.onload = function load() {
        const data = request.response.sentences.join(' ');
        result.summary = data;
      };
    });
  }

  mockApiResponse(callback) {
    const serverResponse = {
      response: {
        results: [
          {
            webUrl: 'url',
            webTitle: 'title',
            summary: { text: 'some summary text' },
          },

          {
            webUrl: 'anotherurl',
            webTitle: 'anothertitle',
            summary: { text: 'different summary text' },
          },
        ],
      },
    };

    this.recordData(serverResponse);
    this.processData();
    callback();
  }
}
