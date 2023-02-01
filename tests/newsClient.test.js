const NewsClient = require('../src/NewsClient');
require('jest-fetch-mock').enableMocks();
const apiData = require('../mockApiData.js');

describe(NewsClient, () => {
  let newsClient;
  beforeEach(() => {
    fetch.mockReset();
    newsClient = new NewsClient();
  });

  it('calls fetch and loads data', (done) => {
    fetch.mockResponseOnce(JSON.stringify(apiData));
    newsClient.loadNews('uk', (data) => {
      const results = data.response.results;
      const thumbnail = results[0].fields.thumbnail;
      const headline = results[0].fields.headline;
      const webUrl = results[0].webUrl;
      expect(thumbnail).toBe(
        'https://media.guim.co.uk/4eb07f2f4bbd086197aa76ca2de731ad7fefc9fd/0_228_4500_2700/500.jpg'
      );
      expect(headline).toBe(
        'UK house price growth slows to lowest rate since mid-2020; all eyes on Fed decision – business live'
      );
      expect(webUrl).toBe(
        'https://www.theguardian.com/business/live/2023/feb/01/uk-annual-house-price-growth-slows-lowest-rate-since-mid-2020-chinas-factories-slump-us-federal-reserve-rate-decision'
      );
      done();
    });
  });
});
