const testApi = require('./apiExample') 
const GuardianApi = require('./guardianApi');

require('jest-fetch-mock').enableMocks();

describe('GuardianApi class', () => {
  it('calls fetch and load first headline of guardian repo', (done) => {
    const api = new GuardianApi();
    fetch.mockResponseOnce(
      JSON.stringify({testApi})
    );

    api.getArticleInfo((articleInfo) => {
      expect(articleInfo.testApi.response.results[0].webTitle).toBe(
        'Hand creams: 10 of the best'
      );
      done();
    });
  });
});