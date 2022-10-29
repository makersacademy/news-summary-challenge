/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const { hasUncaughtExceptionCaptureCallback } = require('process');
var NewsView = require('./newsView');

require('jest-fetch-mock').enableMocks();

describe('NewsViews class', () => {
  it('displays the title of one piece of news', (done) => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const mockClient = {
      loadNews: (callback) => {
        callback({
          response: {
            results: [
              {
                webTitle: 'Carrots',
              },
            ],
          },
        });
      },
    };

    const newsView = new NewsView(mockClient);

    newsView.displayNews();

    expect(document.querySelectorAll('div.news').length).toBe(1);
    expect(document.querySelector('h1').textContent).toEqual('Carrots');
    done();
  });
});
