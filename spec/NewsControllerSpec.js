/* eslint-disable import/extensions */
import { describe, it, expect } from '../lib/TestLibrary.js';

import NewsController from '../src/NewsController.js';

describe('test', () => {
  it('is true', () => {
    expect(true).toEqual(true);
  });
});

describe('NewsController', () => {
  it('has a name', () => {
    const newsController = new NewsController('Henry');
    expect(newsController.name).toEqual('Henry');
  });

  it('can fetch articles and store them in results', () => {
    const newsController = new NewsController();
    newsController.fetchAndUpdateResults();
    setTimeout(() => {
      expect(newsController.results.length).toEqual(10);
    }, 2000);
  });
});
