/* eslint-disable import/extensions */
import { describe, it, expect } from '../lib/TestLibrary.js';
import NewsArticle from '../src/NewsArticle.js';

describe('NewsArticle', () => {
  it('stores a headline, url, id on object creation', () => {
    const headline = 'Brexit: Still Happening';
    const url = 'http://www.example.com/example';
    const id = 0;
    const newsArticle = new NewsArticle(headline, url, id);
    expect(newsArticle.headline).toEqual(headline);
    expect(newsArticle.url).toEqual(url);
    expect(newsArticle.id).toEqual(id);
  });
});
