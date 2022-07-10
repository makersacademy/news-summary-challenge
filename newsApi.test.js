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
    api.fetchStories((dataFromApi) => {
      expect(dataFromApi.response.results[0].MainHeadline).toBe('first headline')
    })
  })

  it('fetches stories when given keywords in the search query', () => {
    const api = new NewsApi();
    fetch.mockResponseOnce(JSON.stringify({
      response: {
        results: [
          {sectionId: 'football'},
          {sectionName: 'Football'}
        ]
      }
    }));
    api.setUrl((dataFromApi) => {
      expect(dataFromApi.response.results.toContain('/football/'))
    });
  })
})