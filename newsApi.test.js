const NewsApi = require('./newsApi');

require('jest-fetch-mock').enableMocks()

describe('API class', () => {
  beforeEach(() => {
    fetch.resetMocks()
  });
  
  it('calls fetch and loads data', () => {
    const api = new NewsApi();

    fetch.mockResponseOnce(JSON.stringify({
      webTitle: "Some value",
      id: 123
    }));

    api.loadSummaries((returnedNewsFromApi) => {
      expect(returnedNewsFromApi.webTitle).toBe("Some value");
      expect(returnedNewsFromApi.id).toBe(123);
    });
  })
})