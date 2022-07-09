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
      expect(returnedDataFromApi.response.results[0].id).toBe("football/live/2022/jul/08/spain-v-finland-womens-euro-2022-live");
    });
  });
});