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

      client.fetchNews(() => {});

      expect(fetch).toHaveBeenCalledWith(url);
    });

    it('returns 10 results', () => {
      client.fetchNews((data) => {
        let result = data.response.results;
        expect(result.length).toEqual(10);
      });
    });

    it('returns containes news title', () => {
      client.fetchNews((data) => {
        let headline = data.response.results[2].webTitle;
        expect(headline).toEqual('Cop26: Conference is a ‘PR event’, says Greta Thunberg – day five live');
      });
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
