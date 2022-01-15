const NewsSummaryApis = require('../newsSummaryApis')

require('jest-fetch-mock').enableMocks();

describe('NewsSummaryApis', () => {
  it('loads headlines from the server', () => {
    const api = new NewsSummaryApis

    fetch.mockResponseOnce(JSON.stringify(
      ['Headline from the server'],
    ));
  
    api.loadHeadlines((newsData) => {
      expect(newsData.length).toEqual(1);
    });
  })
});