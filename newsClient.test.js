const NewsClient = require('./newsClient');

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe('Client class', () => {
  it('calls fetch and loads a mock article', (done) => {
    // 1. Instantiate the class
    const client = new NewsClient();

    // 2. We mock the response from `fetch`
    // The mocked result will depend on what your API
    // normally returns — you want your mocked response
    // to "look like" as the real response as closely as
    // possible (it should have the same fields).
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

      // 4. Tell Jest our test can now end.
      done();
    });
});
});