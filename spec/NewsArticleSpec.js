/* eslint-disable import/extensions */
import { describe, it, expect } from '../lib/TestLibrary.js';

import NewsArticle from '../src/NewsArticle.js';

describe('NewsArticle', () => {
  it('stores the headline', () => {
    const headline = 'Brexit: Still Happening';
    const newsArticle = new NewsArticle(headline);
    expect(newsArticle.headline).toEqual(headline);
  });

  it('stores the url', () => {
    const headline = 'Brexit: Still Happening';
    const url = 'http://example.com';
    const newsArticle = new NewsArticle(headline, url);
    expect(newsArticle.url).toEqual(url);
  });

  it('stores the id', () => {
    const headline = 'Brexit: Still Happening';
    const url = 'http://example.com';
    const id = 0;
    const newsArticle = new NewsArticle(headline, url, id);
    expect(newsArticle.id).toEqual(id);
  });
});
