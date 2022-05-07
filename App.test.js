/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const App = require('./App')

require('jest-fetch-mock').enableMocks()

let mockedData = {
  "response": {
    "header-stuff": "header-stuff",
    "results": [
      {
        "stuff": "stuff",
        "webTitle": "First mocked headline",
        "webUrl": "https://www.theguardian.com/first-headline/mocked",
        "fields": {
          "thumbnail": "https://media.guim.co.uk/first-headline/mocked/picture"
        },
        "more stuff": "more stuff"
      },
      {
        "stuff": "stuff",
        "webTitle": "Second headline",
        "webUrl": "https://www.theguardian.com/second-headline/mocked",
        "fields": {
          "thumbnail": "https://media.guim.co.uk/second-headline/mocked/picture"
        },
        "more stuff": "more stuff"
      }
    ]
  }
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

describe('.saveStories', () => {
  it('selects headline titles and story urls from a full Guardian API response', () => {
    app.saveStories(mockedData)
    expect(app.stories).toEqual([
      {
        webTitle: "First mocked headline",
        webUrl: "https://www.theguardian.com/first-headline/mocked",
        thumbnail: "https://media.guim.co.uk/first-headline/mocked/picture"
      },
      {
        webTitle: "Second headline",
        webUrl: "https://www.theguardian.com/second-headline/mocked",
        thumbnail: "https://media.guim.co.uk/second-headline/mocked/picture"
      }
    ]);
  });
});

describe('.displayStories', () => {
  it('displays loaded stories into the HTML', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    app.displayStories();
    expect(document.querySelectorAll('a.headline').length).toBe(2);
    expect(document.querySelector('a.headline').innerHTML).toBe("First mocked headline");
    expect(document.querySelector('a.headline').href).toBe("https://www.theguardian.com/first-headline/mocked");
  })

  it('displays a relevant picture to illustrate each story', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    app.displayStories();
    expect(document.querySelector('img.headline').src).toBe("https://media.guim.co.uk/first-headline/mocked/picture");

  })
})