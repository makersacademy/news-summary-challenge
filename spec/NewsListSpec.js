/* eslint-disable import/extensions */
import { describe, it, expect } from '../lib/TestLibrary.js';

import NewsList from '../src/NewsList.js';

describe('NewsList', () => {
  it('it initialises with an empty array of articles', () => {
    const newsList = new NewsList();
    expect(newsList.articles.length).toEqual(0);
  });
});
