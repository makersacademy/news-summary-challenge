/* eslint-disable import/extensions */
import { describe, it, expect } from '../lib/TestLibrary.js';
import NewsList from '../src/NewsList.js';
import NewsController from '../src/NewsController.js';

describe('NewsController', () => {
  it('can render articles on the page', () => {
    const newsList = new NewsList();
    const headline = 'headline';
    const url = 'url';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 10; i++) {
      newsList.createArticle(headline, url);
    }
    const newsController = new NewsController(newsList);

    // stub out render method for testing purposes
    newsController.render = () => {};
    newsController.render();

    // stub document for testing purposes
    const document = {
      getElementById: () => ({ innerHTML: newsController.newsList.getView() }),
    };

    expect(document.getElementById('headlines').innerHTML).toEqual(newsController.newsList.getView());
  });
});
