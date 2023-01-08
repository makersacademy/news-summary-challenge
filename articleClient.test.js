const ArticleClient = require('./articleClient');
require('jest-fetch-mock').enableMocks();

describe(ArticleClient, () => {

  let client;
  beforeEach(() => {
    fetch.resetMocks();
    client = new ArticleClient();
  });

  it('calls The Guardian API to get articles from 2023-01-06', (done) => {
    // URL:       response.results[:num].webUrl
    // headline:  response.results[:num].fields.headline
    // thumbnail: response.results[:num].fields.thumbnail
    fetch.mockResponseOnce(JSON.stringify(
      { response: { results: [
        {
          fields: { headline: 'fake headline', thumbnail: 'fake thumbnail url' },
          webUrl: "fake url"
        }
      ]}}
    ));

    client.fetchArticles('2023-01-05', '', (data) => {
      expect(data.response.results[0].fields).toMatchObject(
        { headline: 'fake headline', thumbnail: 'fake thumbnail url' }
      );
      expect(data.response.results[0].webUrl).toEqual("fake url");

      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('2023-01-05')
      );
      done();
    });
  });

  it('catches fetch error', (done) => {
    fetch.mockRejectOnce('Oops, something went wrong');

    client.fetchArticles('2023-01-06', '', (data) => fail(), (error) => {
      expect(error).toEqual('Oops, something went wrong');
      done();
    });
  });

  it('fetches articles with a search term', (done) => {
    fetch.mockResponseOnce(JSON.stringify(
      { response: { results: [
        {
          fields: { headline: 'fake headline', thumbnail: 'fake thumbnail url' },
          webUrl: "fake url"
        }
      ]}}
    ));

    client.fetchArticles('', 'query', (data) => {
      expect(data.response.results[0].fields).toMatchObject(
        { headline: 'fake headline', thumbnail: 'fake thumbnail url' }
      );
      expect(data.response.results[0].webUrl).toEqual("fake url");

      expect(fetch).toHaveBeenCalledWith(expect.stringContaining('q=query'));
      expect(fetch).not.toHaveBeenCalledWith(expect.stringContaining('from-date'));
      expect(fetch).not.toHaveBeenCalledWith(expect.stringContaining('to-date'));
      done();
    });
  });
});
