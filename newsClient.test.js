const jestFetchMock = require("jest-fetch-mock");
jestFetchMock.enableMocks();
const NewsClient = require('./newsClient')
const Responses = require('./serverResponses')

describe('NewsClient class', () => {

  let client;

  beforeEach(() => {
    fetch.resetMocks();
    client = new NewsClient()
    okResponse = Responses.okResponse()
    emptyResponse = Responses.emptyResponse()
    errorResponse = Responses.errorResponse()
  })

  describe('loadArticles method', () => {
    test('it fetches an array of news articles from guardian', async() => {
      fetch.mockResponseOnce(JSON.stringify(okResponse))
      const result = await client.loadArticles()
      expect(result).toEqual(okResponse)
    })

    test('throws an error if fetch is unsuccessful', async() => {
      fetch.mockReject(new TypeError);
      expect(client.loadArticles()).rejects.toThrow(`Connection error. Check your internet connection.`)
    })

    test('throws an error if server response is not ok', async() => {
      fetch.mockResponseOnce(JSON.stringify(errorResponse), {status: 400})
      expect(client.loadArticles()).rejects.toThrow(`HTTP error! Status: 400`)
    })
  });
});