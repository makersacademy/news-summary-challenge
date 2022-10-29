/**
 * @jest-environment jsdom
 */

//const fs = require('fs');
//const { hasUncaughtExceptionCaptureCallback } = require('process');
const NewsView = require('./newsView');

require('jest-fetch-mock').enableMocks();

describe('NewsViews class', () => {
  let newsContainer; // Better to use let when the variable is meant to change and const if it's not

  beforeEach(function () {
    newsContainer = document.createElement('div');
    document.body.appendChild(newsContainer); // This is not needed, just for visual purposes.
    newsContainer.id = 'news-container-test';
  });

  afterEach(function () {
    newsContainer.parentNode.removeChild(newsContainer); // All the after bit could be commented out as well as the previous comment.
  });

  it('displays the title of one piece of news', (done) => {
    // !! IMPORTANT !!
    // Ask them what the **** is this for
    // You do _not_ pull your dist into your tests! What the ****!
    //document.body.innerHTML = fs.readFileSync('./index.html');

    const mockClient = {
      loadNews: (callback) => {
        callback({
          response: {
            results: [
              {
                webTitle: 'Carrots',
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

    const newsView = new NewsView(mockClient, newsContainer);

    newsView.displayNews();

    expect(newsContainer.querySelectorAll('div.news').length).toBe(1);
    expect(newsContainer.querySelector('h1').textContent).toEqual('Carrots');
    done();
  });

  it('displays the title of two piece of news', (done) => {
    //document.body.innerHTML = fs.readFileSync('./index.html');

    const mockClient = {
      loadNews: (callback) => {
        callback({
          response: {
            results: [
              {
                webTitle: 'Carrots',
                fields: {
                  thumbnail:
                    'https://media.guim.co.uk/a19e7fd0401a3c79c3edcfff62b511af069504ab/0_112_4478_2688/500.jpg',
                },
              },
              {
                webTitle: 'Potatos',
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

    const newsView = new NewsView(mockClient, newsContainer);

    newsView.displayNews();

    const newsItems = newsContainer.querySelectorAll('div.news');
    expect(newsItems.length).toBe(2);

    ['Carrots', 'Potatos'].forEach((expectedTitle, index) => {
      expect(newsItems[index].querySelector('h1').textContent).toEqual(
        expectedTitle // Iterates over the different bits of content and checks that they all exist.
      );
    });
    done();
  });

  it('displays the title and the image of one piece of news', (done) => {
    //document.body.innerHTML = fs.readFileSync('./index.html');

    const mockClient = {
      loadNews: (callback) => {
        callback({
          response: {
            results: [
              {
                webTitle: 'Carrots',
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

    const newsView = new NewsView(mockClient, newsContainer);

    newsView.displayNews();

    expect(newsContainer.querySelectorAll('div.news').length).toBe(1);
    expect(newsContainer.querySelectorAll('h1')[0].textContent).toEqual(
      'Carrots'
    );
    expect(newsContainer.querySelectorAll('img')[0].src).toEqual(
      'https://media.guim.co.uk/a19e7fd0401a3c79c3edcfff62b511af069504ab/0_112_4478_2688/500.jpg'
    );
    done();
  });

  it('displays the title and the image of two pieces of news', (done) => {
    //document.body.innerHTML = fs.readFileSync('./index.html');

    const mockClient = {
      loadNews: (callback) => {
        callback({
          response: {
            results: [
              {
                webTitle: 'Carrots',
                fields: {
                  thumbnail:
                    'https://media.guim.co.uk/a19e7fd0401a3c79c3edcfff62b511af069504ab/0_112_4478_2688/500.jpg',
                },
              },
              {
                webTitle: 'Potatos',
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

    const newsView = new NewsView(mockClient, newsContainer);

    newsView.displayNews();

    expect(newsContainer.querySelectorAll('div.news').length).toBe(2);
    expect(newsContainer.querySelectorAll('h1')[1].textContent).toEqual(
      'Potatos'
    );
    expect(newsContainer.querySelectorAll('img')[1].src).toEqual(
      'https://media.guim.co.uk/9c51164d2edbaf1a1ba3b39ee1561ad282507384/0_576_8640_5184/500.jpg'
    );
    done();
  });
});
