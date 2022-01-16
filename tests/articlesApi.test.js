const ApiClasss = require('../lib/articlesApi');

require('jest-fetch-mock').enableMocks();

describe('Api', () => {
  let api;
  beforeEach(() => {
    api = new ApiClasss();
  });

  test('.loadHeadines ', () => {
    fetch.mockResponseOnce(JSON.stringify({title: 'test article title'}));

    api.loadHeadlines((data) => {
      expect(data.title).toEqual('test article title');
    });
  });

  test('.loadArticle ', () => {
    fetch.mockResponseOnce(JSON.stringify({title: 'test article title'}));

    api.loadArticle('test Article Id', (data) => {
      expect(data.title).toEqual('test article title');
    });
  });
});
