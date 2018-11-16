/* eslint-disable import/extensions */
import { describe, it, expect } from '../lib/TestLibrary.js';

import NewsArticle from '../src/NewsArticle.js';

describe('NewsArticle', () => {
  it('stores the headline', () => {
    const headline = 'Brexit: Still Happening';
    const newsArticle = new NewsArticle(headline);
    expect(newsArticle.headline).toEqual(headline);
  });
});