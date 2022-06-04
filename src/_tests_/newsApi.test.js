const NewsApi = require('../models/newsApi');

require('jest-fetch-mock').enableMocks();

describe('NewsApi', () => {
  describe('loadNews', () => {
    it('returns headlines from the Guardian back end server', (done) => {
      const api = new NewsApi();

      fetch.mockResponseOnce(
        JSON.stringify({
          response: {
            results: [
              {
                webTitle:
                  'Scottish Greens walk out of Holyrood debate on Queen’s jubilee',
                webUrl:
                  'https://www.theguardian.com/politics/2022/jun/02/scottish-greens-walk-out-of-holyrood-debate-on-queens-jubilee',
                fields: {
                  thumbnail:
                    'https://media.guim.co.uk/75e7224ddfe85dbb25415fd469b55b3b8b066ee7/0_0_5000_3000/500.jpg',
                },
              },
            ],
          },
        })
      );

      api.loadNews((headlines) => {
        expect(headlines).toEqual([
          {
            webTitle:
              'Scottish Greens walk out of Holyrood debate on Queen’s jubilee',
            webUrl:
              'https://www.theguardian.com/politics/2022/jun/02/scottish-greens-walk-out-of-holyrood-debate-on-queens-jubilee',
            fields: {
              thumbnail:
                'https://media.guim.co.uk/75e7224ddfe85dbb25415fd469b55b3b8b066ee7/0_0_5000_3000/500.jpg',
            },
          },
        ]);
        done();
      });
    });
  });
});
