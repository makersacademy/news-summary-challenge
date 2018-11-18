/* eslint-disable import/extensions */
import { describe, it, expect } from '../lib/TestLibrary.js';
import NewsArticle from '../src/NewsArticle.js';

describe('NewsArticle', () => {
  it('stores a headline, url, id on object creation, and null summary', () => {
    const headline = 'Brexit: Still Happening';
    const url = 'http://www.example.com/example';
    const id = 0;
    const newsArticle = new NewsArticle(headline, url, id);
    expect(newsArticle.headline).toEqual(headline);
    expect(newsArticle.url).toEqual(url);
    expect(newsArticle.id).toEqual(id);
    expect(newsArticle.sentences).toEqual(null);
  });

  describe('#getSummaryView', () => {
    it('gets a summary view from the stored sentences', () => {
      const headline = 'Brexit: Still Happening';
      const url = 'http://www.example.com/example';
      const id = 0;
      const newsArticle = new NewsArticle(headline, url, id);
      newsArticle.sentences = ['Sentence 1.', 'Sentence 2.', 'Sentence 3.', 'Sentence 4.', 'Sentence 5.'];
      expect(newsArticle.getSummaryView()).toEqual('<h3>Brexit: Still Happening</h3><p>Sentence 1. Sentence 2. Sentence 3. Sentence 4. Sentence 5.</p><a class="guardian-link" href="http://www.example.com/example">The Guardian</a>');
    });
  });
});
