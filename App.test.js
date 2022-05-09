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

let bangersMockedData = {
  "response": {
    "header-stuff": "header-stuff",
    "results": [
      {
        "stuff": "stuff",
        "webTitle": "First mocked bangers",
        "webUrl": "https://www.theguardian.com/first-headline/mocked",
        "fields": {
          "thumbnail": "https://media.guim.co.uk/first-headline/mocked/picture"
        },
        "more stuff": "more stuff"
      },
      {
        "stuff": "stuff",
        "webTitle": "Second bangers mock",
        "webUrl": "https://www.theguardian.com/second-headline/mocked",
        "fields": {
          "thumbnail": "https://media.guim.co.uk/second-headline/mocked/picture"
        },
        "more stuff": "more stuff"
      }
    ]
  }
};

document.body.innerHTML = fs.readFileSync('./index.html');
let app = new App();

describe('.fetchStories', () => {
  it('fetches top stories from the Guardian API', () => {
    fetch.mockResponseOnce(JSON.stringify(
      mockedData
    ));

    app.fetchStories((result) => {
      expect(result).toEqual(mockedData);
    });
  });
});

describe('.saveStories', () => {
  it('selects headline titles, story urls and thumbnails from a full Guardian API response', () => {
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

  it('resets: removes previously fetched stories before saving current ones', () => {
    app.saveStories(mockedData)
    app.saveStories(mockedData)
    expect(app.stories.length).toBe(2)
  });
});

describe('.displayStories', () => {
  it('displays loaded stories into the HTML', () => {
    app.displayStories();
    expect(document.querySelectorAll('a.headline').length).toBe(2);
    expect(document.querySelector('a.headline').innerHTML).toBe("First mocked headline");
    expect(document.querySelector('a.headline').href).toBe("https://www.theguardian.com/first-headline/mocked");
  })

  it('displays a relevant picture to illustrate each story', () => {
    app.displayStories();
    expect(document.querySelector('img.headline').src).toBe("https://media.guim.co.uk/first-headline/mocked/picture");
  })

  it('clears previously displayed stories when it is called again', () => {
    app.displayStories();
    app.displayStories();
    expect(document.querySelectorAll('a.headline').length).toBe(2);
  })
});

describe('Search function', () => {
  it('has a free text box for entering a search term', () => {
    expect(document.querySelector('#search-text').nodeName).toBe("INPUT");
    expect(document.querySelector('#search-text').type).toBe("text");

  })

  it('has a search button for submitting a search term', () => {
    expect(document.querySelector('#search-button').nodeName).toBe("BUTTON");
    expect(document.querySelector('#search-button').innerHTML).toBe("Search");
  })

  it('records free text as the search term when button clicked', () => {
    const searchTextEl = document.querySelector('input#search-text');
    searchTextEl.value = 'bangers';
    const searchButtonEl = document.querySelector('button#search-button');
    fetch.mockResponseOnce(JSON.stringify(
      mockedData
    ));
    searchButtonEl.click();
    expect(app.searchTerm).toBe('bangers');
  })

  it('(.fetchSearchStories) fetches stories via the API with the search term', () => {
    let searchTerm = 'bangers';
    fetch.mockResponseOnce(JSON.stringify(
      mockedData
    ));
    app.fetchSearchStories(searchTerm, (result) => {
      expect(result).toEqual(mockedData);
    });
  });

  it('displays a set of stories with the search term in the title', () => {
    const searchTextEl = document.querySelector('input#search-text');
    searchTextEl.value = 'bangers';
    const searchButtonEl = document.querySelector('button#search-button');
    fetch.mockResponseOnce(JSON.stringify(
      bangersMockedData
    ));
    searchButtonEl.click();
    console.log('app.stories: ', app.stories); // not displaying
    document.querySelectorAll('a.headline').forEach((story) => {
      console.log(story.text)
    })
    document.querySelectorAll('a.headline').forEach((story) => {
      expect(story.text.includes('bangers')).toBe(true);
    })
  })
})