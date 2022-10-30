/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const ArticleView = require('./articleView');
 const ArticleModel = require('./articleModel');
 const testApi = require('./apiExample') 
 const { doesNotMatch } = require('assert');
const GuardianApi = require('./guardianApi');


describe('ArticleView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays headline(s)', () => {
    const articleModel = new ArticleModel();
    const guardianApi = new GuardianApi()
    const articleView = new ArticleView(articleModel, guardianApi);

    const newsButtonEl = document.querySelector('#pull-news');
    newsButtonEl.click()
    console.log(document.querySelectorAll('div'))

    expect(document.querySelectorAll('div.h3').length).toEqual(10)
  });
});