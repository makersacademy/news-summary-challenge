/**
 * @jest-environment jsdom
 */
const GuardianClient = require('./guardianClient');

require('jest-fetch-mock').enableMocks()

describe('GuardianClient class', () => {

  it('Calls fetch and loads data.', async () => {
    const client = new GuardianClient();

    fetch.mockResponseOnce(JSON.stringify({
      response: {
        results: [
          {
            fields: {
              headline: 'Headline 1',
              thumbnail: 'http://example.com/image1.jpg',
            },
            webUrl: 'http://example.com/article1',
          },
          {
            fields: {
              headline: 'Headline 2',
              thumbnail: 'http://example.com/image2.jpg',
            },
            webUrl: 'http://example.com/article2',
          },
        ],
      },
    }));

    const data = await client.fetchNewsData('test');

    expect(data).toEqual([
      {
        headline: 'Headline 1',
        link: 'http://example.com/article1',
        thumbnail: 'http://example.com/image1.jpg',
      },
      {
        headline: 'Headline 2',
        link: 'http://example.com/article2',
        thumbnail: 'http://example.com/image2.jpg',
      },
    ]);
  });
});
