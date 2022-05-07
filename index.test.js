/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const App = require('./index.js')

require('jest-fetch-mock').enableMocks()

let mockedData = {
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
    app.saveTitlesUrls(mockedData)
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
    document.body.innerHTML = fs.readFileSync('./index.html');
    app.display();
    expect(document.querySelectorAll('a.headline').length).toBe(2);
    expect(document.querySelector('a.headline').innerHTML).toBe("First mocked headline");
    expect(document.querySelector('a.headline').href).toBe("https://www.theguardian.com/first-headline/mocked");

    
    // testing:
      // number of elements on the page
      // check first element's attributes.
  })
})