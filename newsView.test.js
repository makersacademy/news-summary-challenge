/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const { hasUncaughtExceptionCaptureCallback } = require('process');
var NewsView = require('./newsView');

require('jest-fetch-mock').enableMocks();

describe('NewsViews class', () => {
  it('displays the titles', (done) => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const mockClient = {
      loadNews: (callback) => {
        callback(
          JSON.stringify({
            response: {
              results: [
                {
                  webTitle: 'Carrots',
                },
              ],
            },
          })
        );
      },
    };

    const newsView = new NewsView(mockClient);

    newsView.displayNews();

    expect(document.querySelector('h1.title').textContent).toEqual('Carrots');
    done();
  });
});
