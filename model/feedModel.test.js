const FeedModel = require('./feedModel');
const NewsApi = require('../newsApi');

require('jest-fetch-mock').enableMocks()

describe('FeedModel', () => {
  beforeEach(() => {
    fetch.resetMocks()
  });
  
  it('calls fetch and returns articles in an array', () => {
    // const api = new NewsApi();
    const feed = new FeedModel()

    // fetch.mockResponseOnce(JSON.stringify({
    //   response: {
    //     results: {
    //       webTitle: "Some value",
    //       id: 123
    //     }
    //   }
    // }));
    const exampleResponse = {
      response: {
        results: [
          {
            webTitle: "example headline"
          }
        ]
      }
    }
    
    // feed.setArticles(api.loadSummaries) {
    //   expect(feed.getFeed.length).toBe(1);
    //   expect(feed.getFeed[0].webTitle).toEqual("Some value");
    // };

    feed.setArticles(exampleResponse)
    expect(feed.getFeed().length).toEqual(1)
  })
})