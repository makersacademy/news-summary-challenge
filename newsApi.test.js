const NewsApi = require('./newsApi')//requring from another module

require('jest-fetch-mock').enableMocks()//fetch Mockup



describe('#NewApi', () => {
  it('calls and fetch data', () => {
    const api = new NewsApi();

    fetch.mockResponseOnce(
      JSON.stringify({
        headline: ('this is news')
      })
    )

    api.loadHeadlines("",(callback) => {
      expect(callback.headline).toStrictEqual('this is news');
    })
  });

  it('gets all of todays headlines from news data Api', () => {
    const api = new NewsApi();

    fetch.mockResponseOnce(
      JSON.stringify({
        response: {
          result: [
            {headline: 'first headline'}
          ]
        }
      })
    )
    api.loadHeadlines("",(callback) => {
      expect(callback.response.result[0].headline).toBe('first headline')
    })
  })
  it('fetches stories when given keywords in the search query', () => {
    const api = new NewsApi();

    fetch.mockResponseOnce(
      JSON.stringify({
        response: {
          result: [
            {sectionId: 'football'},
            {sectionName: 'Football'}
          ]
        }
      })
    );
    api.loadHeadlines("",(callback) => {
      expect(callback.response.result[0].sectionId).toBe('football')
    });
  })
}) 


