/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NewsModel = require('./newsModel');
 const NewsView = require('./newsView');

 describe('NewsView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays the headlines from the model', () => {
    const model = new NewsModel();
    const view = new NewsView(model);
    model.addArticle("G'day cunt");

    view.displayNews();
    expect(document.querySelectorAll('div.news').length).toEqual(1);
    expect(document.querySelectorAll('div.news')[0].innerText).toEqual("G'day cunt");
  })

  describe('displayNewsFromApi', () => {
    it('displays news from the api', () => {
      const mockedApi = {
        loadData: () => {
          model.setArticles(["Is this working"]);
          view.displayNews();
        }
      }
      const model = new NewsModel();
      const view = new NewsView(model, mockedApi);
      view.displayNewsFromApi();
      expect(document.querySelectorAll('div.news').length).toEqual(1);
      expect(document.querySelectorAll('div.news')[0].innerText).toEqual("Is this working");
    })
  })
 })