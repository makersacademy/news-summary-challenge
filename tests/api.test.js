const ApiClasss = require('../lib/api')

require('jest-fetch-mock').enableMocks()

describe('Api', () => {
  let api;
  beforeEach(() => {
    api = new ApiClasss();
  })

  test('.loadArticles ', () => {
    fetch.mockResponseOnce(JSON.stringify({title: 'test article title'}));

    api.loadArticles('test', (data) => {
      expect(data.title).toEqual('test article title');
    });
   })
});