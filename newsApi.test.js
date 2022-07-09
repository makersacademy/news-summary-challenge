const NewsApi = require('./newsApi')//requring from another module

require('jest-fetch-mock').enableMocks()//fetch Mockup

describe('NewsApi', () => {
  it('gets all of todays headlines from news data Api from getNews()', () => {
    const api = new NewsApi();//getting NewsApi from another class
    fetch.mockResponseOnce(JSON.stringify({
      response: {
        results: [
          {MainHeadline: 'first headline'},
          {MainHeadline: 'second headline'}
        ]
      }
    }));
    api.getNews((dataFromApi) => {
      expect(dataFromApi.response.results[0].MainHeadline).toBe('first headline')
    })
  })
})