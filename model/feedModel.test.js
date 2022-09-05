const FeedModel = require('./feedModel')

require('jest-fetch-mock').enableMocks()

describe('FeedModel', () => {
  beforeEach(() => {
    fetch.resetMocks()
  });
  
  it('calls fetch and returns articles in an array', () => {
    const feed = new FeedModel()

    const exampleResponse = {
      response: {
        results: [
          {
            webTitle: "example headline"
          }
        ]
      }
    }

    feed.setArticles(exampleResponse)
    expect(feed.getFeed().length).toEqual(1)
  })
})