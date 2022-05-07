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

document.body.innerHTML = fs.readFileSync('./index.html');
let app = new App();

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
    // searchButtonEl.click();
    // expect(app.searchTerm).toBe('bangers');
  })

  // it('(.fetchSearchStories) fetches stories via the API with the search term', () => {
  //   const searchTextEl = document.querySelector('input#search-text');
  //   searchTextEl.value = 'bangers';
  //   const searchButtonEl = document.querySelector('button#search-button');
    // searchButtonEl.click();

    // fetch.mockResponseOnce(req =>
    //   req.url === 'https://content.guardianapis.com/search?q=bangers&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=9f9c20e8-7f5a-4de8-9bd3-efe35ccbcbca'
    //     ? app.fetchSearchStories('bangers', (result) => {
    //       expect(result.content).toBe('some content');
    //     })
    //     .then(res => 'ok')
    //     : Promise.reject(new Error('bad url'))
    // );
    // expect(app.fetchSearchStories).toBeCalled;
  // })

  // it('allows user to type text, search and have displayed stories containing the text', () => {
  //   document.body.innerHTML = fs.readFileSync('./index.html');
  //   const searchTextEl = document.querySelector('#search-text');
  //   searchTextEl.value = 'search term';
  //   const searchButtonEl = document.querySelector('#search-button');
  //   searchButtonEl.click();
  //   expect(fetchSearchStories('search term'))
  // })

})