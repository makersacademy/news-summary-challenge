require('jest-fetch-mock').enableMocks()
const { NewsClient } = require('./newsClient')

describe('class NewsClient', () => {

  describe('loadArticles() method', () => {

    let client;
    beforeEach(() => {
      fetchMock.mockClear()
      fetchMock.doMock()
      client = new NewsClient()
    })
  
    it('should call fetch and return a resolved promise', (done) => {
      fetchMock.mockResponseOnce(JSON.stringify({}));
      client.loadArticles((response) => {
        expect(fetchMock).toHaveBeenCalled()
        expect(response).toBeDefined();
        done();
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
})