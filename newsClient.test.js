const NewsClient = require('./newsClient');

require('jest-fetch-mock').enableMocks()

describe('Client class', () => {
  it('calls fetch and loads a mock article', (done) => {
    // 1. Instantiate the class
    const client = new NewsClient();

    // 2. Mock the response from `fetch`
    fetch.mockResponseOnce(JSON.stringify({
      fields:{
        headline:"TEST HEADLINE",
        byline:"by TEST JOURNALIST",
        thumbnail:"https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg"
     },
    }));

    // 3. We call the method, giving a callback function.
    // When the HTTP response is received, the callback will be called.
    // We then use `expect` to assert the data from the server contain
    // what it should.
    client.loadArticles((returnedDataFromApi) => {
      expect(returnedDataFromApi.fields.headline).toBe("TEST HEADLINE");
      expect(returnedDataFromApi.fields.byline).toBe("by TEST JOURNALIST");
      done();
    });
});
});