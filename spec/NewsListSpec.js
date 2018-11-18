/* eslint-disable import/extensions */
import { describe, it, expect } from '../lib/TestLibrary.js';
import NewsList from '../src/NewsList.js';

describe('NewsList', () => {
  describe('#create', () => {
    it('can create a news article with an id', () => {
      const newsList = new NewsList();
      const headline = 'headline';
      const url = 'url';
      newsList.createArticle(headline, url);
      expect(newsList.articles[0].id).toEqual(0);
    });

    it('can create two news articles with consecutive ids', () => {
      const newsList = new NewsList();
      const headline = 'headline';
      const url = 'url';
      newsList.createArticle(headline, url);
      newsList.createArticle(headline, url);
      expect(newsList.articles[1].id).toEqual(1);
    });
  });

  describe('#getView', () => {
    it('can create the HTML view from a news list', () => {
      const newsList = new NewsList();
      const headline = 'headline';
      const url = 'url';
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 10; i++) {
        newsList.createArticle(headline, url);
      }
      expect(newsList.getView()).toEqual('<p><a href="url" id="0">headline</a></p><p><a href="url" id="1">headline</a></p><p><a href="url" id="2">headline</a></p><p><a href="url" id="3">headline</a></p><p><a href="url" id="4">headline</a></p><p><a href="url" id="5">headline</a></p><p><a href="url" id="6">headline</a></p><p><a href="url" id="7">headline</a></p><p><a href="url" id="8">headline</a></p><p><a href="url" id="9">headline</a></p>');
    });
  });

  describe('#fetchArticlesFromGuardian', () => {
    it('can fetch and store articles from the Guardian API', () => {
      const newsList = new NewsList();
      newsList.fetchFromGuardianAndUpdateArticles();
      setTimeout(() => {
        expect(newsList.articles.length).toEqual(10);
      }, 1500);
    });
  });

  describe('#fetchSummariesFromAylien', () => {
    it('can fetch and store summaries for each article, using the Aylien API', () => {
      const newsList = new NewsList();
      newsList.fetchFromGuardianAndUpdateArticles();
      setTimeout(() => {
        newsList.fetchSummariesFromAylienAndUpdateSentences();
      }, 1500);
      setTimeout(() => {
        expect(newsList.articles[0].sentences.length).toEqual(5);
      }, 3000);
    });
  });
});
