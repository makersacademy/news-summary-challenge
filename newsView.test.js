/**
 * @jest-environment jsdom
 */

const fs = require('fs');
//const { hasUncaughtExceptionCaptureCallback } = require('process');
const NewsView = require('./newsView');

require('jest-fetch-mock').enableMocks();

describe('NewsViews class', () => {
  let newsContainer;

  // beforeEach(function () {
  //   newsContainer = document.createElement('div');
  //   // document.body.appendChild(newsContainer); // This is not needed, just for visual purposes.
  //   newsContainer.id = 'news-container-test';
  // });

  // afterEach(function () {
  //   newsContainer.parentNode.removeChild(newsContainer); // All the after bit could be commented out as well as the previous comment.
  // });

  it('displays the title of one piece of news', (done) => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const mockClient = {
      loadNews: (callback) => {
        callback({
          response: {
            results: [
              {
                webTitle: 'Carrots',
                webUrl:
                  'https://www.theguardian.com/sport/live/2022/oct/29/new-zealand-v-wales-womens-rugby-world-cup-quarter-final-live',
                fields: {
                  thumbnail:
                    'https://media.guim.co.uk/a19e7fd0401a3c79c3edcfff62b511af069504ab/0_112_4478_2688/500.jpg',
                },
              },
            ],
          },
        });
      },
    };

    const newsView = new NewsView(mockClient);

    newsView.displayAllNews();

    expect(document.body.querySelectorAll('div.news').length).toBe(1);
    expect(document.body.querySelector('h1').textContent).toEqual('Carrots');
    done();
  });

  it('displays the title of two piece of news', (done) => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const mockClient = {
      loadNews: (callback) => {
        callback({
          response: {
            results: [
              {
                webTitle: 'Carrots',
                webUrl:
                  'https://www.theguardian.com/sport/live/2022/oct/29/new-zealand-v-wales-womens-rugby-world-cup-quarter-final-live',
                fields: {
                  thumbnail:
                    'https://media.guim.co.uk/a19e7fd0401a3c79c3edcfff62b511af069504ab/0_112_4478_2688/500.jpg',
                },
              },
              {
                webTitle: 'Potatos',
                webUrl:
                  'https://www.theguardian.com/sport/live/2022/oct/29/new-zealand-v-wales-womens-rugby-world-cup-quarter-final-live',
                fields: {
                  thumbnail:
                    'https://media.guim.co.uk/a19e7fd0401a3c79c3edcfff62b511af069504ab/0_112_4478_2688/500.jpg',
                },
              },
            ],
          },
        });
      },
    };

    const newsView = new NewsView(mockClient);

    newsView.displayAllNews();

    const newsItems = document.body.querySelectorAll('div.news');
    expect(newsItems.length).toBe(2);

    ['Carrots', 'Potatos'].forEach((expectedTitle, index) => {
      expect(newsItems[index].querySelector('h1').textContent).toEqual(
        expectedTitle // Iterates over the different bits of content and checks that they all exist.
      );
    });
    done();
  });

  it('displays the image of one piece of news', (done) => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const mockClient = {
      loadNews: (callback) => {
        callback({
          response: {
            results: [
              {
                webTitle: 'Carrots',
                webUrl:
                  'https://www.theguardian.com/sport/live/2022/oct/29/new-zealand-v-wales-womens-rugby-world-cup-quarter-final-live',
                fields: {
                  thumbnail:
                    'https://media.guim.co.uk/a19e7fd0401a3c79c3edcfff62b511af069504ab/0_112_4478_2688/500.jpg',
                },
              },
            ],
          },
        });
      },
    };

    const newsView = new NewsView(mockClient);

    newsView.displayAllNews();

    expect(document.body.querySelectorAll('div.news').length).toBe(1);
    expect(document.body.querySelectorAll('h1')[0].textContent).toEqual(
      'Carrots'
    );
    expect(document.body.querySelectorAll('img')[0].src).toEqual(
      'https://media.guim.co.uk/a19e7fd0401a3c79c3edcfff62b511af069504ab/0_112_4478_2688/500.jpg'
    );
    done();
  });

  it('displays the image of two pieces of news', (done) => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const mockClient = {
      loadNews: (callback) => {
        callback({
          response: {
            results: [
              {
                webTitle: 'Carrots',
                webUrl:
                  'https://www.theguardian.com/sport/live/2022/oct/29/new-zealand-v-wales-womens-rugby-world-cup-quarter-final-live',
                fields: {
                  thumbnail:
                    'https://media.guim.co.uk/a19e7fd0401a3c79c3edcfff62b511af069504ab/0_112_4478_2688/500.jpg',
                },
              },
              {
                webTitle: 'Potatos',
                webUrl:
                  'https://www.theguardian.com/sport/live/2022/oct/29/new-zealand-v-wales-womens-rugby-world-cup-quarter-final-live',
                fields: {
                  thumbnail:
                    'https://media.guim.co.uk/9c51164d2edbaf1a1ba3b39ee1561ad282507384/0_576_8640_5184/500.jpg',
                },
              },
            ],
          },
        });
      },
    };

    const newsView = new NewsView(mockClient);

    newsView.displayAllNews();

    expect(document.body.querySelectorAll('div.news').length).toBe(2);
    expect(document.body.querySelectorAll('h1')[1].textContent).toEqual(
      'Potatos'
    );
    expect(document.body.querySelectorAll('img')[1].src).toEqual(
      'https://media.guim.co.uk/9c51164d2edbaf1a1ba3b39ee1561ad282507384/0_576_8640_5184/500.jpg'
    );
    done();
  });

  it('displays the link to the individual page in one piece of news', (done) => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const mockClient = {
      loadNews: (callback) => {
        callback({
          response: {
            results: [
              {
                webTitle: 'Carrots',
                webUrl:
                  'https://www.theguardian.com/sport/live/2022/oct/29/new-zealand-v-wales-womens-rugby-world-cup-quarter-final-live',
                fields: {
                  thumbnail:
                    'https://media.guim.co.uk/a19e7fd0401a3c79c3edcfff62b511af069504ab/0_112_4478_2688/500.jpg',
                },
              },
            ],
          },
        });
      },
    };

    const newsView = new NewsView(mockClient);

    newsView.displayAllNews();

    expect(document.body.querySelectorAll('a')[0].href).toEqual(
      'https://www.theguardian.com/sport/live/2022/oct/29/new-zealand-v-wales-womens-rugby-world-cup-quarter-final-live'
    );
    done();
  });

  it('displays only the news that match the user search', (done) => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const mockClient = {
      loadNews: (callback) => {
        callback({
          response: {
            results: [
              {
                webTitle: 'Carrots',
                webUrl:
                  'https://www.theguardian.com/sport/live/2022/oct/29/new-zealand-v-wales-womens-rugby-world-cup-quarter-final-live222',
                fields: {
                  thumbnail:
                    'https://media.guim.co.uk/a19e7fd0401a3c79c3edcfff62b511af069504ab/0_112_4478_2688/500.jpg',
                },
              },
              {
                webTitle: 'Potatos',
                webUrl:
                  'https://www.theguardian.com/sport/live/2022/oct/29/new-zealand-v-wales-womens-rugby-world-cup-quarter-final-live',
                fields: {
                  thumbnail:
                    'https://media.guim.co.uk/9c51164d2edbaf1a1ba3b39ee1561ad282507384/0_576_8640_5184/500.jpg',
                },
              },
            ],
          },
        });
      },
    };

    const newsView = new NewsView(mockClient);

    newsView.displayAllNews();

    let buttonEl = document.querySelector('#search-button');
    let inputEl = document.querySelector('#search-input');
    inputEl.value = 'Potatos';
    console.log('buttonEl', buttonEl);
    buttonEl.click();

    expect(document.body.querySelectorAll('div.news').length).toBe(1);
    expect(document.body.querySelectorAll('h1')[0].textContent).toEqual(
      'Potatos'
    );
    expect(document.body.querySelectorAll('img')[0].src).toEqual(
      'https://media.guim.co.uk/9c51164d2edbaf1a1ba3b39ee1561ad282507384/0_576_8640_5184/500.jpg'
    );
    done();
  });
});
