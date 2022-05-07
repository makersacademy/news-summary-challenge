/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const ArticlesView = require('./articlesView');
const ArticlesModel = require('./articlesModel');
const ArticlesApi = require('./articlesApi');

jest.mock('./articlesModel');
jest.mock('./articlesApi');

describe('ArticlesView', () => {
  beforeEach(() => {
    ArticlesModel.mockClear();
    ArticlesApi.mockClear();
    document.body.innerHTML = fs.readFileSync('./index.html')
    mockModel = new ArticlesModel();
    mockApi = new ArticlesApi();
    view = new ArticlesView(mockModel, mockApi);
  });

  it('displayArticlesFromApi fetches the data and display it on the page', () => {
    const articleData = {
      response: {
        results: [{
          webTitle: 'Real Madrid reach the Champions League final',
          webUrl: 'www.madridfinal.com',
          fields: {
            thumbnail: 'madridpicture.jpg'
          }
        }]
      }
    };
    const article = {
      headline: 'Real Madrid reach the Champions League final',
      image: 'madridpicture.jpg',
      url: 'www.madridfinal.com'
    }
    view.api.loadArticles.mockImplementation((callback) => 
      callback(articleData)
    );
    view.model.convertData.mockImplementation(() => article);
    view.model.addArticle.mockImplementation(() => undefined);
    view.model.getArticles.mockImplementation(() => [article]);

    view.displayArticlesFromApi();

    expect(view.api.loadArticles).toHaveBeenCalledTimes(1);
    expect(view.model.convertData).toHaveBeenCalledTimes(1);
    expect(view.model.addArticle).toHaveBeenCalledTimes(1);
    expect(view.model.getArticles).toHaveBeenCalledTimes(1);
    expect(document.querySelector('img.pic').src).toBe(
      'http://localhost/madridpicture.jpg'
    );
    expect(document.querySelector('div.title').innerText).toBe(
      'Real Madrid reach the Champions League final'
    );
  });
});