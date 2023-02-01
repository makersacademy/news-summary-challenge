const NewsClient = require('../src/NewsClient');
require('jest-fetch-mock').enableMocks();
const apiData = require('../mock/mockApiData.js');

describe(NewsClient, () => {
  let newsClient;
  beforeEach(() => {
    fetch.mockReset();
    newsClient = new NewsClient();
  });

  it('calls fetch and loads data', (done) => {
    fetch.mockResponseOnce(JSON.stringify(apiData));
    newsClient.loadNews((data) => {
      const results = data.response.results;
      const stories = results.map((article) => {
        const { webUrl } = article;
        const { headline, thumbnail, standfirst } = article.fields;
        return { webUrl, headline, thumbnail, standfirst };
      });
      expect(stories[0].thumbnail).toBe(
        'https://media.guim.co.uk/4eb07f2f4bbd086197aa76ca2de731ad7fefc9fd/0_228_4500_2700/500.jpg'
      );
      expect(stories[0].headline).toBe(
        'UK house price growth slows to lowest rate since mid-2020; all eyes on Fed decision – business live'
      );
      expect(stories[0].webUrl).toBe(
        'https://www.theguardian.com/business/live/2023/feb/01/uk-annual-house-price-growth-slows-lowest-rate-since-mid-2020-chinas-factories-slump-us-federal-reserve-rate-decision'
      );
      expect(stories[0].standfirst).toBe(
        '<p>UK annual house price growth slows to 1.1%; investors await US Federal Reserve message on whether it will tighten monetary policy further</p>'
      );
      done();
    });
  });
});
