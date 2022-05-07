const App = require('./index.js')

require('jest-fetch-mock').enableMocks()

const app = new App();

describe('.fetchStories', () => {
  it('fetches top stories from the Guardian API', () => {
    fetch.mockResponseOnce(JSON.stringify({
      content: 'some content'
    }));

    app.fetchStories((result) => {
      expect(result.content).toBe('some content');
    });
  });
});

describe('.saveTitlesUrls', () => {
  it('selects headline titles and story urls from a full Guardian API response', () => {
    let data = {
      "response": "stuff",
      "results": [
        {
          "stuff": "stuff",
          "webTitle": "First mocked headline",
          "webUrl": "https://www.theguardian.com/first-headline/mocked",
          "more stuff": "more stuff"
        },
        {
          "stuff": "stuff",
          "webTitle": "Second headline",
          "webUrl": "https://www.theguardian.com/second-headline/mocked",
          "more stuff": "more stuff"
        }
      ]
    };
    app.saveTitlesUrls(data)
    expect(app.currentHeadlines).toEqual([
      {
        webTitle: "First mocked headline",
        webUrl: "https://www.theguardian.com/first-headline/mocked"
      },
      {
        webTitle: "Second headline",
        webUrl: "https://www.theguardian.com/second-headline/mocked"
      }
    ]);
  });
});

describe('.display', () => {
  it('displays loaded stories into the HTML', () => {

  })
})