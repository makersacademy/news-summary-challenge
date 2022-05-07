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

describe('.saveTitleUrl', () => {
  it('selects headline titles and story urls from a full Guardian API response', () => {
    let data = {
      "response": "stuff",
      "results": {
        "0": {
          "stuff": "stuff",
          "webTitle": "First mocked headline",
          "webURL": "https://www.theguardian.com/first-headline/mocked",
          "more stuff": "more stuff"
        },
        "1": {
          "stuff": "stuff",
          "webTitle": "Second headline",
          "webURL": "https://www.theguardian.com/second-headline/mocked",
          "more stuff": "more stuff"
        }
      }
    };
    app.saveTitleUrl(data)
    expect(app.currentHeadlines).toBe([
      {
        "webTitle": "First mocked headline",
        "webURL": "https://www.theguardian.com/first-headline/mocked"
      },
      {
        "webTitle": "Second headline",
        "webURL": "https://www.theguardian.com/second-headline/mocked"
      }
    ]);
  });
});

describe('.display', () => {
  it('displays loaded stories into the HTML', () => {

  })
})