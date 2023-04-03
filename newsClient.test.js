require('jest-fetch-mock').enableMocks()
const { NewsClient } = require('./newsClient')

describe('class NewsClient', () => {

  const mockData = {
    response: {
      results: [{
        webUrl: 'test',
        webTitle: 'test',
        fields: {
          thumbnail: 'test',
          bodyText: 'test'
        }
      }]
    }
  }

  let client;
  beforeEach(() => {
    fetchMock.mockClear()
    fetchMock.doMock()
    client = new NewsClient()
  })

  describe('loadArticles() method', () => {

    it('should call fetch and return a resolved promise', () => {
      fetchMock.mockResponseOnce(JSON.stringify(mockData));
      client.loadArticles((response) => {
        expect(fetchMock).toHaveBeenCalled()
        expect(response).toBeDefined();
        expect(response).toEqual(mockData);
      })
    })

    it('should call fetch and handle rejected promise', () => {
      fetchMock.mockRejectOnce(new Error('An error has occured'));
      const callback = jest.fn()
      const errorHandler = jest.fn((error) => {
        expect(callback).not.toHaveBeenCalled()
        expect(errorHandler).toHaveBeenCalled()
        expect(error.message).toBe('An error has occured')
      })
      client.loadArticles(callback, errorHandler)
    })
  })

  describe('searchArticles() method', () => {

    it('should accept a user input to load new articles', () => {
      fetchMock.mockResponseOnce(JSON.stringify(mockData))
      client.searchArticles('video games', (data) => {
        expect(fetchMock).toHaveBeenCalled()
        expect(data).toBeDefined()
        expect(data).toEqual(mockData)
      })
    })
  })
})