const NewsApi = require('./newsApi');


require('jest-fetch-mock').enableMocks()

describe('NewsApi class', () => {
  it('calls fetch and loads repo info', async () => {
    const api = new NewsApi();
    fetch.mockResponseOnce(JSON.stringify());

    api.getRepoInfo((repoInfo) => {
      expect(repoInfo).not.toBeNull();
    });
  });
});