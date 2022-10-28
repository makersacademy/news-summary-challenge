const NewsClient = require('./newsClient');

require('jest-fetch-mock').enableMocks();

describe('NewsClient class', () => {
  it('calls fetch and loads news repo info', (done) => {
    const client = new NewsClient();
    fetch.mockResponseOnce(
      JSON.stringify({
        results: {
          id: 'sport/blog/2022/feb/02/at-last-the-inventors-of-modern-skiing-have-something-to-cheer-dave-ryding',
          sectionName: 'Sport',
          fields: {
            headline:
              'At last, the inventors of modern skiing have something to cheer: Dave Ryding',
            byline: 'Andy Bull',
            thumbnail:
              'https://media.guim.co.uk/1e2ab1ced5da6ecf8d7fcca9f87d5398c1d22336/0_119_6480_3888/500.jpg',
          },
        },
      })
    );

    client.getRepoInfo((repoInfo) => {
      expect(repoInfo.results.fields.headline).toBe(
        'At last, the inventors of modern skiing have something to cheer: Dave Ryding'
      );
      done();
    });
  });
});