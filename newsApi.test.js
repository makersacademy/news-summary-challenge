const NewsApi = require('./newsApi')

require('jest-fetch-mock').enableMocks()

describe(NewsApi, () => {
  it('gets data from API with getNews()', () => {
    const api = new NewsApi();
    fetch.mockResponseOnce(JSON.stringify({
      response: {
        results: [
          {fields: {headline: 'first headline'}},
          {fields: {headline: 'second headline'}}
        ]
      }
    }));
    api.getNews((dataFromApi) => {
      expect(dataFromApi.response.results[0].fields.headline).toBe('first headline');
    });
  });
});