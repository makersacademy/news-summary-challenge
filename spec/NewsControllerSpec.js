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
});
