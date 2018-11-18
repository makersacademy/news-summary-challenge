/* eslint-disable import/extensions */
import { describe, it, expect } from '../lib/TestLibrary.js';
import NewsList from '../src/NewsList.js';

describe('NewsList', () => {
  describe('#create', () => {
    it('can create a news article with an id', () => {
      const newsList = new NewsList();
      const headline = 'headline';
      const url = 'url';
      newsList.create(headline, url);
      expect(newsList.articles[0].id).toEqual(0);
    });

    it('can create two news articles with consecutive ids', () => {
      const newsList = new NewsList();
      const headline = 'headline';
      const url = 'url';
      newsList.create(headline, url);
      newsList.create(headline, url);
      expect(newsList.articles[1].id).toEqual(1);
    });
  });
});
