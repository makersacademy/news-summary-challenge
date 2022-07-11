const NewsApi = require('./NewsApi');
const fakeJson = require('./fakeJson.json')

require('jest-fetch-mock').enableMocks()

describe('NewsApi', () => {
  it('calls fetch and loads data', () => {
    const api = new NewsApi();
    fetch.mockResponseOnce(JSON.stringify(
      fakeJson
    ));

    api.loadData((returnedDataFromApi) => {
      expect(returnedDataFromApi.response.results[0].webTitle).toBe("Australia news live: Queenslanders urged to wear masks as nation records 13 Covid deaths; NSW flood clean-up under way");
    });
  });
});