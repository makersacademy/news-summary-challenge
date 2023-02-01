const NewsClient = require('../src/NewsClient');
require('jest-fetch-mock').enableMocks();

describe(NewsClient, () => {
  let newsClient;
  beforeEach(() => {
    fetch.mockReset();
    newsClient = new NewsClient();
  });

  it('calls fetch and loads data', (done) => {
    fetch.mockResponseOnce(
      JSON.stringify([
        {
          thumbnail:
            'https://media.guim.co.uk/fa7d5a5a0d6c0b13c9db83f4cd51721d655832dc/0_72_3500_2101/500.jpg',
          headline:
            'Three Russians under sanctions own UK property via overseas entities',
          webUrl:
            'https://www.theguardian.com/uk-news/2023/jan/31/three-russians-under-sanctions-own-uk-property-via-overseas-entities',
        },
      ])
    );
    newsClient.loadNews('uk', (data) => {
      const { thumbnail, headline, webUrl } = data[0];
      expect(thumbnail).toBe(
        'https://media.guim.co.uk/fa7d5a5a0d6c0b13c9db83f4cd51721d655832dc/0_72_3500_2101/500.jpg'
      );
      expect(headline).toBe(
        'Three Russians under sanctions own UK property via overseas entities'
      );
      expect(webUrl).toBe(
        'https://www.theguardian.com/uk-news/2023/jan/31/three-russians-under-sanctions-own-uk-property-via-overseas-entities'
      );
      done();
    });
  });
});
