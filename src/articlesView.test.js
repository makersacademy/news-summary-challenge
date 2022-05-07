/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const ArticlesView = require('./articlesView');
const ArticlesModel = require('./articlesModel');

jest.mock('./articlesModel');

describe('ArticlesView', () => {
  beforeEach(() => {
    ArticlesModel.mockClear();
    document.body.innerHTML = fs.readFileSync('./index.html')
    model = new ArticlesModel();
    view = new ArticlesView(model);
  });

  it('gets the articles from the model and displays them on the page', () => {
    view.model.getArticles.mockImplementation(() => [{
      headline: 'Real Madrid reach the Champions League final'
    }]);

    view.displayArticles();
    expect(document.querySelector('div.article').innerText).toBe(
      'Real Madrid reach the Champions League final'
    );
  });
});