const jestFetchMock = require("jest-fetch-mock");
jestFetchMock.enableMocks();
const NewsClient = require('./newsClient')
const Responses = require('./serverResponses')

describe('NewsClient class', () => {

  let client;
  const API_KEY = process.env.GUARDIAN_KEY

  beforeEach(() => {
    fetch.resetMocks();
    client = new NewsClient()
    okResponse = Responses.okResponse()
    emptyResponse = Responses.emptyResponse()
    errorResponse = Responses.errorResponse()
    specificResponse = Responses.specificResponse()
  })

  describe('loadArticles method with no specific input', () => {
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

    test('it sends the query request in correct format to the API', async() => {
      fetch.mockResponseOnce(JSON.stringify(specificResponse), {status:200})
      await client.loadArticles('football')
      expect(fetchMock.mock.calls[0][0]).toEqual(`https://content.guardianapis.com/search?q=football&api-key=${API_KEY}`);
    })
  });
});