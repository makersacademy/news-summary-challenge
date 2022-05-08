const GuardianApi = require('./guardianApi');
require('jest-fetch-mock').enableFetchMocks();

describe('Api', () => {
  it('calls and fetch data', () => {
    const api = new GuardianApi();

    fetch.mockResponseOnce(
      JSON.stringify({
        headline: ('this is news')
      })
    )

    api.loadHeadlines((callback) => {
      expect(callback.headline).toStrictEqual('this is news');
    })
  });
})