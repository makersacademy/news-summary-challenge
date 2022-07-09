const NewsApi = require('./NewsApi');

require('jest-fetch-mock').enableMocks()

describe('NewsApi', () => {
  it('calls fetch and loads data', () => {
    const api = new NewsApi();

    fetch.mockResponseOnce(JSON.stringify({
      name: "Some value",
      id: 123
    }));

    api.loadData((returnedDataFromApi) => {
      expect(returnedDataFromApi.name).toBe("Some value");
      expect(returnedDataFromApi.id).toBe(123);
    });
  });
});