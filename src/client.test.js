const Client = require('./client');
const fs = require('fs');

const client = new Client();
const bodyData = fs.readFileSync('./fixtures/response.json', 'utf8');

describe('Client', () => {
  beforeEach(() => mockFetchRequest());

  afterEach(() => fetch.mockClear());

  describe('fetchNews', () => {
    it('sends a request to makersAPIURL for news', () => {
      const url = client.makersAPIURL + client.guardianSearchEndpoint;

      client.fetchNews();

      expect(fetch).toHaveBeenCalledWith(url);
    });

    it('returns 10 results', async () => {
      let data = await client.fetchNews(),
        results = data.response.results;

      expect(results.length).toEqual(10);
    });

    it('returns containes news title', async () => {
      let data = await client.fetchNews(),
        headline = data.response.results[2].webTitle;
        
      expect(headline).toEqual('EU could shelve Brexit trade deal if UK triggers article 16, Irish minister warns');
    });
  });

  const mockFetchRequest = () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(JSON.parse(bodyData)),
      })
    );
  };
});
