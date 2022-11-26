const NewsClient = require('./newsClient');

require('jest-fetch-mock').enableFetchMocks();

describe('NewsClient class', () => {
  it('calls fetch and LOADS news data', (done) => {
    const client = new NewsClient();
    fetch.mockResponseOnce(
      JSON.stringify([
        {
          thumbnail:
            'https://media.guim.co.uk/decac53e58b9e35b250e56010d5f8cb71bcb7ad6/0_137_4326_2596/500.jpg',
          headline:
            "Senegal keep World Cup hopes alive before Qatar's hopes are ended",
          webUrl:
            'https://www.theguardian.com/football/2022/nov/25/qatar-senegal-world-cup-group-a-match-report',
        },
      ])
    );
    client.loadNews('uk', (response) => {
      const { thumbnail, headline, webUrl } = response[0];
      expect(thumbnail).toBe(
        'https://media.guim.co.uk/decac53e58b9e35b250e56010d5f8cb71bcb7ad6/0_137_4326_2596/500.jpg'
      );
      expect(headline).toBe(
        "Senegal keep World Cup hopes alive before Qatar's hopes are ended"
      );
      expect(webUrl).toBe(
        'https://www.theguardian.com/football/2022/nov/25/qatar-senegal-world-cup-group-a-match-report'
      );
      done();
    });
  });
});
